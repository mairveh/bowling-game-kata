function convertToScore(scoreString: string, calculateFor: 1 | 2): number {
    console.log("convert score for: " + scoreString + " for the next " + calculateFor + " scores")

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

    console.log("input scores: " + sequenceArray + ` length ${sequenceLength}`)

    let totalScore = 0
    for(let i=0; i<10; i++) {
        if (sequenceArray[i]==='X') {
            totalScore += 10 + convertToScore(sequenceArray[i+1], 2) + convertToScore(sequenceArray[i+2], 2) 
            console.log("total score X: " + totalScore + ` index: ${i}`)
        }
        else if(sequenceArray.includes("/")) {
            totalScore += 10 + convertToScore(sequenceArray[i+1], 1)
            console.log("total score /: " + totalScore + ` index: ${i}`)
        }
        else {
            totalScore += parseInt(sequenceArray[i], 2)
            console.log("total score integer: " + totalScore + ` index: ${i}`)
        } 
    }
 
    
  return totalScore
}

module.exports = calculateTotalScore;
