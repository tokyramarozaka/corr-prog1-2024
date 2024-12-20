function indexOf(string, letter){
    for(let i = 0; i < string.length; i++){
        if (string[i] == letter){
            return i;
        }
    }
    return -1;
}


function lastIndexOf(string, letter){
    for(let i = string.length - 1; i >= 0; i--){
        if (string[i] == letter){
            return i;
        }
    }
    return -1;
}

function lastIndexOf2(string, letter){
    let index = -1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            index = i;
        }
    }

    return index;
}

function isUnique(string, letter){
    if (indexOf(string,letter) == -1){
        return false;
    }
    return indexOf(string, letter) == lastIndexOf(string, letter);
}

// test them.