let cube = {};
cube.left = [];
cube.right = [];
cube.top=[];
cube.bottom =[];
cube.center = [];
cube.rowInfo = [];
cube.columnInfo = [];
cube.proto='';
cube.input = '';
cube.rightInfo = ["U'","R'","L","B"];
cube.leftInfo = ["U","R","L'","B'"];
cube.newCube = '';

// 처음 구성요소 만들기
cube.makeOthers = function() {
    this.left=["R", "G", "G"];
    this.right=["W", "W", "B"];
    this.top=["R", "R", "W"];
    this.bottom=["G", "B", "B"];
    this.makeFrist();
}
// 이차원 배열 만들기
cube.makeFrist = function() {
    this.rowInfo=[this.top, ["G", "C", "W"], this.bottom];
    this.columnInfo=[this.left, ["R","C","B"], this.right];
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
        console.log("문자열 처리");
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

// right or left Shift 방향 결정하기
cube.decideShift = function(line) {
    if(this.rightInfo.includes(this.input)){
        let sline = line.pop();
        line.unshift(sline);
        this.createNew(line);
    }
    else if(this.leftInfo.includes(this.input)){
        let sline = line.shift();
        line.push(sline);
        this.createNew(line);
    }
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
        console.log(this.input);
    }
    else if(this.columnInfo.includes(line)===true){
        for(let i=0; i<3; i++) {
            this.input += '\n';
            for(let j=0; j<3; j++) {
                this.input += `${this.columnInfo[j][i]} `;
            }
        }
        console.log(this.input);
    }
    this.setData();
}

cube.makeOthers();
