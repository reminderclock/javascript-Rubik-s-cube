
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
        cube += arr.join(' ') + '</br>';
    });
    displayCube(cube);
}

// display cube
function displayCube(cube) {
    const container = document.querySelector('.cube');
    container.innerHTML = `<p>${cube}</p>`;
}


makeDefalutCube();