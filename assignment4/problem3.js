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

const player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 }

const player2 = { name: "France", foul: 10, cardY: 2, cardR: 1 }

const result = bestTeam(player1, player2)
console.log(result)