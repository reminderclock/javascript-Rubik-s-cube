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
    decideCase();
}

// 입력 케이스별 함수 호출
function decideCase(){
    switch(main.input) {
    case "U":
    // rotateUp();
    break;
    case "U'":
    // rotateUp();rotateUp();rotateUp();
    break;
    case "Q":
    return console.log("~bye");     
    }
}

// 윗면 이동 함수
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
    let newCube='';
    main.info.forEach( (arr) => {
        newCube += arr.join(' ') + '\n';
    });
    console.log(newCube);
}

main.createInfo();