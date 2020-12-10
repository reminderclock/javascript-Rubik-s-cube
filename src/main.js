
// make frist cube
function makeDefalutCube() {
    let left = ['R', 'G', 'G'];
    let right = ['W', 'W', 'B'];
    let top = [left[0], 'R', right[0]];
    let center = [left[1], 'C', right[1]];
    let bottom = [left[2], 'B', right[2]];
    let cubeInfo = [top, center, bottom];
    let cube = '';
        cubeInfo.forEach( (arr) => {
        cube += arr.join(' ') + '\n';
    });
    console.log(cube);
    displayPrompt(cubeInfo);
}

// Add prompt
function displayPrompt(cube) {
    let input = prompt('cube>');
    decideShift(cube, input);
}

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
    
    // function shiftRight(cube) {
    
    // }
    
    
    
    makeDefalutCube();