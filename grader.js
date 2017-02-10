var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function averageScores(scoresArray){
    var scores = 0;
    for(var i = 0; i < scoresArray.length; i++){
        scores+= scoresArray[i];
    }
    scores = Math.round(scores/scoresArray.length);
    return scores;
}

function average2(scoresArray){
    var total = 0;
    scoresArray.forEach(function(score){
        total += score;
    });
    var avg = total/scoresArray.length;
    avg = Math.round(avg);
    return avg;
}

console.log(averageScores(scores));
console.log(averageScores(scores2));
console.log("*************");
console.log(average2(scores));
console.log(average2(scores2));