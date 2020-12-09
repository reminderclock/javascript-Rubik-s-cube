// limit parameters range
function limitRange() {
    let info = prompt("공백으로 구분하여 단어 하나, 정수 숫자 하나( -100 <= N < 100) , L 또는 R을(대소문자구분❌) 입력하세요. ex)apple 3 L").split(' ');
    let str = info[0];
    let num = info[1];
    let direction = info[2];
    if(isNaN(str)===false) {
        return alert("입력 형식에 벗어납니다.");
    }
    if((Number.isInteger(parseInt(num))===false) || (num>99 || num<-100)) {
        return alert("입력 형식에 벗어납니다.");
    }
    if(direction.toUpperCase()!=="L" && direction.toUpperCase()!=="R"){
        return alert("입력 형식에 벗어납니다.");
    }
    return decideShift(info);
}

// decide direction
function decideShift(info) {
    let shift = info[2].toUpperCase();
    if((shift==='L' && Math.sign(info[1])===1) || (shift==='R' && Math.sign(info[1])===-1)) {
        shiftLeft(info);
    }
    else{
        shiftRight(info);
    }
}

// Case: shift left
function shiftLeft(info) {
    let word = info[0].split('');
    let num = info[1];
    for(let i=0; i<Math.abs(num); i++) {
    word.push(word[i]);
    }
    word.splice(0, Math.abs(num));
    displayWord(word.join(''));
}

// Case: shift right
function shiftRight(info) {
    let word = info[0].split('');
    let num = info[1];
    for(let j=0; j<Math.abs(num); j++) {
    word.unshift(word[word.length-1-j]);
    }
    word.splice(word.length-Math.abs(num));        
    displayWord(word.join(''));
}

// display result
function displayWord(word) {
    const container = document.querySelector('#word');
    container.innerHTML = `<p>${word}</p>`;
}
limitRange();
