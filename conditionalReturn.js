function isEven(number){
    if(number % 2 === 0){
         return true;
    }
    else{
         return false;
    }
}

// console.log(isEven(559))
// console.log(isEven(46))

function isOdd(number){
    if(number % 2 === 1){
        // return true
    }
    // return false
}
// console.log(isOdd(34))



function evenSizedString(string) {
    const size = string.length;
    // console.log(string, size)
    if(size % 2 === 0){
        console.log('evenSizee')
        return true
    }
    else{
         console.log('oddSizee')
        return false
    }
}
// console.log(evenSizedString('Shanto'))
// console.log(evenSizedString('dhaka'))


function doubleTriple(number, doDouble){
    if(doDouble === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleTriple(10, true))
console.log(doubleTriple(10, false))