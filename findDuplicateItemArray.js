

const birianyKhor = ['shanto', 'salman', 'sifat', 'mahidul', 'shadman', 'bappy', 'shanto', 'sifat']

const numbers = [1,25,26,32,1,2,54,23,32,2,26]


function duplicateArray(Array) {
    const unique = []
    for (const item of Array) {
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}

const dArray = duplicateArray(birianyKhor)
console.log(dArray)


function duplicateNumber(num) {
    const uniqueNum = []
    for (const items of num) {
        if(uniqueNum.includes(items) === false){
            uniqueNum.push(items)
        }
    }
    return uniqueNum
}

const finalNumber = duplicateNumber(numbers)
console.log(finalNumber)