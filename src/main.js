


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
        cube += arr.join(' ') + '</br>';
    });
    displayCube(cube);
}

function displayCube(cube) {
    const container = document.querySelector('.cube');
    container.innerHTML = `<p>${cube}</p>`;
}


makeDefalutCube();