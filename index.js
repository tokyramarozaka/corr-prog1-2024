function countSpaces(string){
    let spaces = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] == ' '){
            spaces++;
        }
    }

    return spaces;
}

function containsSpaces(string){
    return countSpaces(string) > 0;
}

console.log(containsSpaces('Good morning'));// true
console.log(containsSpaces('Hello')); // false
