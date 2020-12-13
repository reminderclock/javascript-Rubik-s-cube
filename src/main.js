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
    let temp = [[],[],[],[],[]];
    for(let i=2; i<7; i++) {
        for(let j=2; j<13; j++) {
            temp[i-2][j-2] = main.info[i][j];
        }
    }
    for(let i=8; i<13; i++) {
        main.info[2][i] = temp[12-i][0];
        main.info[14-i][12] = temp[0][18-i];
        main.info[6][i] = temp[12-i][10];
        main.info[i-6][2] = temp[4][i-2];
    }
    // createNewCube();
}



main.createInfo();