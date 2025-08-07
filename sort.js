
// javaScript e kono string ke sorting korar jonno sort keyword use kora hoy 
// Example

const name = ['shanto', 'sathi', 'bithi', 'akhi']
name.sort()
console.log(name)

const numbers = [430, 43, 12, 454, 34, 678, 23,112,132]
numbers.sort()
console.log(numbers)

const sort_number = numbers.sort(function(a, b) {return a - b})
console.log(sort_number)

// kono number borotheke soto te sorting korte cai tahole 

const big_number = numbers.sort( function (a, b) {return b -a})
console.log(big_number)