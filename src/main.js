let cube = {};
cube.left = [];
cube.right = [];
cube.top=[];
cube.bottom =[];
cube.center = [];
cube.middle = [];
cube.rowInfo = [];
cube.proto='';
cube.input = '';
cube.rightInfo = ["U'","R'","L","B"];
cube.leftInfo = ["U","R","L'","B'","Q"];
cube.allInfo = ["U","R","L","B","'","Q"];
cube.newCube = '';
cube.inputInfo=[];
cube.type='';
cube.q='';

// 처음 구성요소 만들기
cube.makeOthers = function() {
    this.left=["R", "G", "G"];
    this.right=["W", "W", "B"];
    this.top=["R", "R", "W"];
    this.bottom=["G", "B", "B"];
    this.center=["G", "C", "W"];
    this.middle =["R", "C", "B"]; 
    this.makeFrist();
}
// 이차원 배열 만들기
cube.makeFrist = function() {
    this.rowInfo=[this.top, this.center, this.bottom];
    this.frist();
}

// 배열 큐브로 구현
cube.frist = function() {
    this.rowInfo.forEach( (arr) => {
        this.proto += arr.join(' ') + '\n';
    });
    console.log(this.proto);
    this.setData();
}

// input data 인풋 방향 받기
cube.setData = function() {
    this.input = prompt('cube>');
    if(this.rightInfo.includes(this.input)===false && this.leftInfo.includes(this.input)===false){
        return this.limitRange();
    }
    this.decideLine();
}

// 입력값 범위 제한하기
cube.limitRange = function() {
    this.inputInfo =this.input.split('');
    this.type='string';
    for(let i=0; i<this.inputInfo.length; i++) {
        if(this.allInfo.includes(this.inputInfo[i])===false) {
            return alert("입력형식에 벋어납니다.");
        }
    }
    return this.makeInput();
}

// 문자열 받을시 input 재생성
cube.makeInput = function() {
    this.input = this.inputInfo.shift();
    if(this.inputInfo[0]==="'"){
        this.input += this.inputInfo.shift();
    }
    if(this.input==="Q"){
        this.q='q';
    }
    if(this.input===undefined && this.q!=='q'){
        return this.setData();
    }
    return this.decideLine();
}

// decide line to move 라인 결정하기
cube.decideLine = function() {
    switch(this.input) {
    case "U":
    case "U'":
    return this.decideShift(this.top);
    case "B":
    case "B'":
    return this.decideShift(this.bottom);
    case "R":
    case "R'":
    return this.decideShift(this.right);
    case "L":
    case "L'":
    return this.decideShift(this.left); 
    case "Q":
    return console.log("~bye");     
    }
} 

// right or left 이동하는 방향에 맞는 Pushing
cube.decideShift = function(line) {
    if(this.rightInfo.includes(this.input)===true){
        let sline = line.pop();
        line.unshift(sline);
        return this.updateOtherLine(line);
    }
    else if(this.leftInfo.includes(this.input)===true){
        let sline = line.shift();
        line.push(sline);
        return this.updateOtherLine(line);
    }
}

// U,U',B,B'<-->R,R',L,L' 이동시 서로에 이동된 배열 적용
cube.updateOtherLine = function(line) {
    if(line===this.left) {
        this.top[0] = line[0];
        this.center[0] = line[1];
        this.bottom[0] = line[2];
    }
    else if(line ===this.right){
        this.top[2] = line[0];
        this.center[2] = line[1];
        this.bottom[2] = line[2];
    }
    else if(line ===this.top) {
        this.left[0] = line[0];
        this.right[0]= line[2];
        this.middle[0] = line[1];
    }
    else if(line ===this.bottom) {
        this.left[2] = line[0];
        this.middle[2] = line[1];
        this.right[2] = line[2];
    }
    this.createNew();
}

// create New Cube 새로운 큐브 생성하기 
cube.createNew = function() {
    this.rowInfo.forEach( (arr) => {
        this.input += `\n${arr.join(' ')}`;
    });
    console.log(this.input);
    if(this.type==='string'){
        return this.makeInput();
    }
    return this.setData();
}

cube.makeOthers();