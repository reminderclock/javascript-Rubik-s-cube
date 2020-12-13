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
    // decideCase();
}


main.createInfo();