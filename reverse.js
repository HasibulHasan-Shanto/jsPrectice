// kono akta arrray ke reverse korar jonno jei keyword gulo use kora hoy

//  push == kono array er last e kono upadan add korar jonno push keyword use kora hoy
//  pop ==  kono array er last er kono upadan ke remove korar jonno pop use kora hoy
//  shift == kono array er first er kono upadan ke remove korar jonno shift use kora hoy
//  unshift == kono array er last first kono upadan add korar jonno unshift use kora hoy
// Example
let numbers = [1, 2, 3, 4, 5];
let reverse = [];

for(let index = 0; index < numbers.length; index++){
    console.log(numbers[index])
    reverse.push(numbers[index]);
    reverse.unshift(numbers[index])
}

console.log(reverse)