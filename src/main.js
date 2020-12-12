let cube = {};
cube.left = [];
cube.right = [];
cube.top=[];
cube.bottom =[];
cube.center = [];
cube.middle = [];
cube.rowInfo = [];
cube.columnInfo = [];
cube.proto='';
cube.input = '';
cube.rightInfo = ["U'","R'","L","B"];
cube.leftInfo = ["U","R","L'","B'","Q"];
cube.allInfo = ["U","R","L","B","'","Q"];
cube.newCube = '';
cube.inputInfo=[];

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
    this.columnInfo=[this.left, this.middle, this.right];
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
    // // 문자열 다 처리할수 있도록 지정
    if(this.inputInfo.length!==0){
        this.makeInput();
    }
    this.input = prompt('cube>');
    if(this.rightInfo.includes(this.input)===false && this.leftInfo.includes(this.input)===false){
        this.limitRange();
    }
    this.decideLine();
}

// 입력값 범위 제한하기
cube.limitRange = function() {
    this.inputInfo =this.input.split('');
    for(let i=0; i<this.inputInfo.length; i++) {
        if(this.allInfo.includes(this.inputInfo[i])===false) {
            return alert("입력형식에 벋어납니다.");
        }
    }
    this.makeInput();
}

// 문자열 받을시 input 재생성
cube.makeInput = function() {
    this.input = this.inputInfo.shift();
    if(this.inputInfo[0]==="'"){
        this.inputInfo.shift();
        this.input += "'";
    }
    this.decideLine();
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
        this.updateOtherLine(line);
    }
    else if(this.leftInfo.includes(this.input)===true){
        let sline = line.shift();
        line.push(sline);
        this.updateOtherLine(line);
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
    this.createNew(line);
}

// create New Cube 새로운 큐브 생성하기 
cube.createNew = function(line) {
    if(this.rowInfo.includes(line)===true){
        for(let i=0; i<3; i++) {
            this.input += '\n';
            for(let j=0; j<3; j++) {
                this.input += `${this.rowInfo[i][j]} `;
            }
        }
    }
    else if(this.columnInfo.includes(line)===true){
        for(let i=0; i<3; i++) {
            this.input += '\n';
            for(let j=0; j<3; j++) {
                this.input += `${this.columnInfo[j][i]} `;
            }
        }
    }
    console.log(this.input);
    this.setData();
}

cube.makeOthers();

