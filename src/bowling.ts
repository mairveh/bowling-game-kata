function convertToScore(scoreString: string, calculateFor: 1 | 2): number {

    if (scoreString==="X" ) {
        //strike
        return 10
    }
    
    if (calculateFor===2) {
        if(scoreString.includes("/")) {
            //spare
            return 10
        }
        else {
            return (scoreString[0]==='-'?0:parseInt(scoreString[0])) + (scoreString[1]==='-'?0:parseInt(scoreString[1]))
        }

    }
    else {
        //calculateFor ===1
        return (scoreString[0]==='-')?0:parseInt(scoreString[0])
    } 
  
}


function calculateTotalScore(sequence : string): number {

    const sequenceArray = sequence.split(" ")
    const sequenceLength = sequenceArray.length

    let totalScore = 0
    for(let i=0; i<10; i++) {
        if (sequenceArray[i]==='X') {
            totalScore += 10 + convertToScore(sequenceArray[i+1], 2) + convertToScore(sequenceArray[i+2], 2) 
        }
        else if(sequenceArray[i].includes("/")) {
            if(i == sequenceLength-1) {
                //if there's a spare in the final roll, the next roll would be included in the same roll therefore i+1 will be undefined
                totalScore += 10 + convertToScore(sequenceArray[i][2], 1)
            }
            else {
                totalScore += 10 + convertToScore(sequenceArray[i+1], 1)
            }
        }
        else {
            totalScore += convertToScore(sequenceArray[i], 2)
        } 
    }
    
  return totalScore
}

module.exports = calculateTotalScore;
