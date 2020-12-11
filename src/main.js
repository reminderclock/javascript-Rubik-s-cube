
// decideShift test
function decideShift(cube, input) {
    let right = ["U'","R'","L","B"];
    let left = ["U","R","L'","B'"];
    let bye = "Bye~";
    if(right.includes(input)===true) {
        let newCube = '';
        newCube += input;
        cube.forEach( (arr) => {
        newCube += '\n' + arr.join(' ');
    });
        shiftRight(cube);
    }
    else if(left.includes(input)===true) {
        let newCube = '';
        newCube += input;
        cube.forEach( (arr) => {
        newCube += '\n' + arr.join(' ');
    });
        shiftLeft(cube);
    }
    else if(input==="Q") {
        console.log(bye);
    }
    }
    
    function shiftRight(cube) {
    
    }
    
    
    
    makeDefalutCube();

