function totalFine( fare ) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }

    const surcharge = fare *  ( 20 / 100)
    const serviceCharge = 30
    const fine =fare + surcharge + serviceCharge
    return fine
}

const vara = totalFine(20)
console.log(vara)