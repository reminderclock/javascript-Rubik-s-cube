let main={};
main.white = 'W';
main.red = 'R';
main.yellow='Y';
main.orange='O';
main.blue='B';
main.green='G';
main.empty=' ';
main.info=[];
main.proto=[];
main.input='';
main.temp=[[],[],[],[],[],[],[],[],[]];
main.rever=["U'","R'","F'","L'"];
main.two = 'U2';
main.cnt=0;
main.shiftInfo = ["U","U'","R","R'","L","L'","F","F'","Q"];
main.inputInfo=[];
main.allInfo = ["R","U","F","L","Q","'","2"];
main.type='';
main.q='';
main.createInfo = function() {
    this.info = [[this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty]];
                this.makefrist();
}
main.makefrist= function() {
        this.info.forEach( (arr) => {
            this.proto += arr.join(' ') + '\n';
        });
        console.log(this.proto);
        setData();
}

// 데이터 입력 받는 부분 추가
function setData() {
    main.input = prompt('cube>');
    if(main.shiftInfo.includes(main.input)===false){
        return limitRange();
    }
    decideCase();
}

// 범위 제한
function limitRange() {
    main.inputInfo =main.input.split('');
    main.type='string';
    for(let i=0; i<main.inputInfo.length; i++) {
        if(main.allInfo.includes(main.inputInfo[i])===false) {
            return alert("입력형식에 벋어납니다.");
        }
    }
    return makeInput();
}

function makeInput() {
    main.input = main.inputInfo.shift();
    if(main.inputInfo[0]==="'"){
        main.inputInfo.shift();
        main.input += "'";
    }
    else if(main.inputInfo[0]==="2"){
        main.inputInfo.shift();
        main.input += "2";
    }
    if(main.input==="Q"){
        main.q='q';
    }
    if(main.input===undefined && main.q!=='q'){
        return setData();
    }
    return decideCase();
}

// 입력 케이스별 함수 호출
function decideCase(){
    switch(main.input) {
    case "U":
    rotateUp();
    break;
    case "U2":
    rotateUp();rotateUp();
    break;
    case "U'":
    rotateUp();rotateUp();rotateUp();
    break;
    case "L":
    rotateLeft();
    break;
    case "L'":
    rotateLeft();rotateLeft();rotateLeft();
    break;
    case "R":
    rotateRight();
    break;
    case "R'":
    rotateRight();rotateRight();rotateRight();
    break; 
    case "F":
    rotateFront();
    break;
    case "F'":
    rotateFront();rotateFront();rotateFront();
    break; 
    case "Q":
    return console.log("~bye");     
    }
}

// 앞쪽면(red) 이동함수
function rotateFront() {
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.temp[i][j] = main.info[i][j];
        }
    }
    for(let i=0; i<3; i++) {
        main.info[5][12+i] = main.temp[5][6+i];
        main.info[5][6+i] = main.temp[5][i];
        main.info[5][i] = main.temp[5][18+i];
        main.info[5][18+i] = main.temp[5][12+i];
    }
    createNewCube();
}

// 오른쪽면(green) 이동 함수
function rotateRight() {
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.temp[i][j] = main.info[i][j];
        }
    }
    for(let i=0; i<3; i++) {
        main.info[i][11] = main.temp[3+i][8];
        main.info[3+i][8] = main.temp[6+i][11];
        main.info[6+i][11] = main.temp[5-i][18];
        main.info[5-i][18] = main.temp[i][11];
    }
    createNewCube();

}

// 왼쪽면(white) 이동 함수 
function rotateLeft() {
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.temp[i][j] = main.info[i][j];
        }
    }
    for(let i=0; i<3; i++) {
        main.info[8-i][9] = main.temp[5-i][6];
        main.info[5-i][6] = main.temp[2-i][9];
        main.info[2-i][9] = main.temp[3+i][20];
        main.info[3+i][20] = main.temp[8-i][9];
    }
    createNewCube();
}

// 윗면(orange) 이동 함수
function rotateUp() {
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.temp[i][j] = main.info[i][j];
        }
    }
    for(let i=0; i<3; i++) {
        main.info[5-i][12] = main.temp[2][11-i];
        main.info[6][9+i] = main.temp[5-i][12];
        main.info[3+i][2] = main.temp[6][9+i];
        main.info[2][11-i] = main.temp[3+i][2];
    }
    createNewCube();
}

// 적용된 배열로 새로운 큐브 구현
function createNewCube() {
    if(main.input==="Q"){
        return;
    }
    let newCube='';
    newCube += main.input + '\n';
    main.info.forEach( (arr) => {
        newCube += arr.join(' ') + '\n';
    });
    main.cnt++;
    if(main.rever.includes(main.input)===true) {
        return viewRever(main.cnt, newCube);
    }
    if(main.input===main.two){
        return viewU2(main.cnt, newCube);
    }
    console.log(newCube);
    if(main.type==='string'){
        return makeInput();
    }
    setData();
}

// 반대방향 case 출력
function viewRever(cnt, newCube) {
    if(cnt%3===0) {
        console.log(newCube);
        if(main.type==='string'){
            return makeInput();
        }
        return setData();
    }
}

// 180도 회전 출력-> U2
function viewU2(cnt, newCube) {
    if(cnt%2===0) {
        console.log(newCube);

    }
    if(main.type==='string'){
        return makeInput();
    }
    return setData();
}

main.createInfo();