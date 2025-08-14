function totalFine( fare ) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }

    const surcharge = fare *  ( 20 / 100)
    const serviceCharge = 30
    const fine =fare + surcharge + serviceCharge
    return fine
}


function  onlyCharacter( str ) {
        if (typeof str !== 'string') {
            return 'Invalid'
        }
        const string = str.replaceAll(/\s/g, '').toUpperCase()
        return string
}


function  bestTeam( player1, player2 ) {
        if(typeof player1 !== 'object' || typeof player2 !== 'object' || player1 === null || player2 === null){
            return 'Invalid'
        }

        const totalPlayer1 = player1.foul + player1.cardY + player1.cardR 
        const totalPlayer2 = player2.foul + player2.cardY + player2.cardR 

        if(totalPlayer1 < totalPlayer2){
            return player1.name
        }
        else if(totalPlayer2 < totalPlayer1){
            return player2.name
        }

        return 'Tie'

}

function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    if(arr1.length !== arr2.length){
        return false
    }
        for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true
        
}

function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return 'Invalid'
    }
    if(marks.length === 0){
        return {finalScore : 0, pass : 0, fail : 0}
    }
        
    

    let total = 0
    let passCount = 0
    let failCount = 0
    for (const mark of marks) {
         total += mark
        if(mark >= 40){
             passCount ++
        }
        else{
             failCount ++
        }
    }
    const average = Math.round(total / marks.length)
    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    }
}