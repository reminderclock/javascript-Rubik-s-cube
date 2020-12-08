


function makeDefalutCube() {
    let cubeInfo = [
    {line: "top", info: ["R", "R", "W"]},
    {line: "center", info: ["G", "C", "W"]},
    {line: "bottom", info: ["G", "B", "B"]},
    {line: "right", info: ["W", "W", "B"]},
    {line: "left", info: ["R", "G", "G"]},
    ];
    let cube = '';
    const defaultArr = cubeInfo.map( a=> a.info).slice(0,3);
        defaultArr.forEach( (arr) => {
        cube += arr.join(' ') + '\n';
    });
    // console.log(defaultArr);
    console.log(cube);
    displayPrompt(cubeInfo);
}

function displayPrompt(cubeInfo) {
    let command = prompt('>cube').split('');
    pushLine(cubeInfo, command);
}

function pushLine(cubeInfo, command) {
    let sum = '';
    for(let k=0; k<command.length; k++) {
        sum += command[k];

    }
    console.log(sum.length);
}

makeDefalutCube();