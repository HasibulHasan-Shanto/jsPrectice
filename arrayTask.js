const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reverse = [];

for (let index = 0; index < colors.length; index++) {
    // console.log(colors)
    reverse.unshift(colors[index])
}
// console.log(reverse)

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = []

for (let index = 0; index < numbers.length; index++) {
    
    if(numbers[index] % 2 === 0){
        evenNumber.push(numbers[index])
        
    }
}
 console.log(evenNumber)

var members = ['Tom', 'Tim', 'Tin', 'Tik']
var concat;

for (let index = 0; index < members.length; index++) {
    
    
}
var members = ['Tom', 'Tim', 'Tin', 'Tik']
var concat = '';

for (const name of members ) {
    concat = concat + name
}
// console.log(concat)

const statement = 'I am a hard working person'
const word = statement.split(' ')
// console.log(word)
const reverseWord = word.reverse()
// console.log(reverseWord)
const reverseStatement = reverseWord.join(' ')
// console.log(reverseStatement)

const student = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
  ]
const firstName = student[0].name + ' ' + 'Scored' + ' ' + student[0].marks
// console.log(firstName)
const lastName = student[1].name + ' ' + 'scored' + ' ' + student[1].marks
// console.log(lastName)

const twoDArray = [
    [1, 2],
    [3, 4],
    [5, 6]
  ]

  twoDArray[1].shift()
  twoDArray[1].unshift(99)
  // console.log(twoDArray)