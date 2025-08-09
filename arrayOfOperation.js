function sumOfNumber(numbers){
    let sum = 0;
for (let index = 0; index < numbers.length; index++) {
 sum = sum + numbers[index]    
    
}
return sum
    
}
const num = [2, 4, 5, 1]
const sum = sumOfNumber(num)
// console.log('sum is :' + sum)

function evenNumber(number){
 let evens = [];
 let sum = 0;
for (let index = 0; index < number.length; index++) {
    
    if (number[index] % 2 === 0) {
        evens.push(number[index])
     }
     
}
return evens
}
const evenN = [11, 12, 45, 656, 78, 13, 19, 17]
const evenIs = evenNumber(evenN)
console.log(evenIs)
