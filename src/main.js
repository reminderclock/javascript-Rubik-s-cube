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
    this.setData();
}

// input data
cube.setData = function() {
    this.input = prompt('cube>');
    this.decideLine();
}

// decide line to move
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

// right or left Shift
cube.decideShift = function(line) {
    if(this.rightInfo.includes(this.input)){
        let sline = line.pop();
        line.unshift(sline);
        console.log(line);
    }
    else if(this.leftInfo.includes(this.input)){
        let sline = line.shift();
        line.push(sline);
        console.log(line);
    }
}

cube.makeOthers();
