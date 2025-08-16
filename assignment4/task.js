

function sumEven(arr) {
    if(!Array.isArray(arr)){
        return 'Invalid'
    }


let sum = 0
    for (const number of arr) {
        
        if(typeof number === 'number' && number % 2 === 0){
            sum = sum + number   
        }
        else{
            return 'Invalid'
        }
    }
     return sum
}
const Numbers = [1,3,45,47,79,]
const result = sumEven(Numbers)
// console.log(result)


function countVowels(str){

    if (typeof str !== 'string') {
        return 'Invalid'
    }
    const vowel = 'aeiouAEIOU'
    let count = 0
    
    for (const item of str) {
        if(vowel.includes(item)){
            count++
        }
    }
    return count
}
const string = 'hello world'
const vowels = countVowels(string)
console.log(vowels)

function reverseWords(str){
    if(typeof str !== 'string'){
        return 'Invalid'
    }
    
    const spliteWords =str.split(' ')
    const reversSplite = spliteWords.reverse()
    const reverseJoin = reversSplite.join(' ')
    return reverseJoin

}

const sentence = 'shanto is a developer'
const finalReverse = reverseWords(sentence)
console.log(finalReverse)


function duplicateArray(arr) {

    let uniqueArr = []
    for (const items of arr) {
        if(uniqueArr.includes(items) === false){
            uniqueArr.push(items)
        }
    }
    return uniqueArr
}

const numbers = [1,2,3,4,1,5,2,8,10,12,11,12]
const duplicate = duplicateArray(numbers)
console.log(duplicate)