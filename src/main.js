
    // limit parameters range
    function limitRange(str, num, direction) {
        if(isNaN(str)===false) {
            return false;
        }
        if((Number.isInteger(num)===false) || (num>99 || num<-100)) {
            return false;
        }
        if(direction.toUpperCase()!=="L" && direction.toUpperCase()!=="R"){
            return false;
        }
        return pushWord(str, num, direction.toUpperCase());
    }



    // push word
    function pushWord(str, num, direction) {
        const word = str.split('');
        if((direction==='L' && Math.sign(num)===1) || (direction==='R' && Math.sign(num)===-1)) {
            for(let i=0; i<Math.abs(num); i++) {
                word.push(word[i]);
            }
            word.splice(word[0], Math.abs(num));       
        }
        else if((direction==='L' && Math.sign(num)===-1) || (direction==='R' && Math.sign(num)===1)) {
            for(let j=0; j<Math.abs(num); j++) {
                word.unshift(word[word.length-1-j]);
            }
            word.splice(Math.abs(num),word.length);       
        }
        return word.join('');
    }

    console.log(limitRange(11,3,'L'));
    console.log(limitRange('banana',66,'R'));
    console.log(limitRange('apple',23,'o'));
    console.log(limitRange('carrot',-100,'r'));
    console.log(limitRange('cat',-4,'R'));