var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function averageScores(scoresArray){
    var scores = 0;
    for(var i = 0; i < scoresArray.length; i++){
        scores+= scoresArray[i];
    }
    scores = Math.round(scores/scoresArray.length);
    console.log("The average is " + scores);
    return scores;
}

averageScores(scores);
averageScores(scores2);