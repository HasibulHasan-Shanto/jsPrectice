// kivabe inch theke feet e convert korbo fucntion e

function inchToFeet(inch) {
    const feet =  inch / 12
    //return feet
}
const height = inchToFeet(68)
//console.log(height)

//Result ta ke string e jevabe korbo

function inchToFeet2(inch) {
    const feetFraction = inch / 12
    const feetNumber  = parseInt(feetFraction)
    const inchRemaining = inch / 12
    const fixed = inchRemaining.toFixed(2)
    const result = feetNumber +  ' feet ' + fixed + ' inch '
    return result
}
const height2 = inchToFeet2(70)
console.log(height2)

// miles theke kilometer jevabe convert korbo ta holo 

function milesToKilometer(miles) {
    const kilo = miles * 1.60934
    return kilo
}
const kilometer = milesToKilometer(5)
console.log(kilometer)     