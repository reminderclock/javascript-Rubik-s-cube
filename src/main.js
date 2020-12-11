let cube = {};
cube.left = ["R", "G", "G"];
cube.right = ["W", "W", "B"];
cube.top=[];
cube.bottom =[];
cube.center = [];
cube.fristInfo = [];
cube.proto='';
cube.input = '';
cube.rightInfo = ["U'","R'","L","B"];
cube.leftInfo = ["U","R","L'","B'"];
cube.newCube = '';

cube.makeFrist = function() {
    this.fristInfo=[this.top, this.center, this.bottom];
    this.frist();
}
cube.makeOthers = function() {
    this.top=[this.left[0], "R", this.right[0]];
    this.center = [this.left[1], "C", this.right[1]];
    this.bottom=[this.left[2], "B", this.right[2]];
    this.makeFrist();
}
cube.frist = function() {
    this.fristInfo.forEach( (arr) => {
        this.proto += arr.join(' ') + '\n';
    });
    console.log(this.proto);
}

cube.makeOthers();
