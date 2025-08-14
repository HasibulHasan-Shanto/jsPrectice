// javascript e sob theke soto number and boro number akdom sohoje kivabe ber kora jay ta holo 

// const sotoNumber = Math.min(12,23,5656,21,-1,235,5,4)
// console.log(sotoNumber)

// const boroNumber = Math.max(12,23,5656,21,1,235,5,4)
// console.log(boroNumber)


// console.log(Math.PI) 
// console.log(Math.abs(5-10))
// console.log(Math.round(2.552))
// console.log(Math.floor(2.95))
// console.log(Math.ceil(2.999995))
// console.log(Math.ceil(2.111))
// console.log(Math.random())

// console.log(Math.pow(2,3))
// console.log(Math.sq)


const numbers = [23,23,25,85,65,75,69,43,59,897]

function alNumber(number) {
    let max = numbers[0]
    for (const item of number) {
        if(item > max){
            max = item
        }
    }
    return max
}
const numb = alNumber(numbers)
console.log(numb)


function allNumber(number) {
    let min = number[0]
    for (const items of number) {
        if(min > items){
            min = items
        }
    }
    return min
}
const minNumber = allNumber(numbers)
console.log(minNumber)


