

function addAverage(numbers) {
    const oddIs = []
    let sum = 0
    for (const number of numbers) {
        
        if (number % 2  === 1) {
            
            oddIs.push(number)
            
        }
        
    }
    
    for (const isOdd of oddIs) {
        sum = sum + isOdd
    }
    const count = oddIs.length
    const result = sum / count
    const finalResult = result.toFixed(2)
    return finalResult

}
const num = [10, 23, 11, 56, 89, 48, 89, 19, 37, 71]
const num1 = addAverage(num)
console.log('The odds average is : ' + num1)
