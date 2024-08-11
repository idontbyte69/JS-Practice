// var numbers = [20,30,5,6,8,123,3];
// numbers.sort(function(a,b){
//     return a-b;
// });
// document.write(numbers);

function highestScore (arr1){
    var hs = arr1[0];
    for (var i = 0; i < 5; i++ ){
        if(hs < arr1[i]){
            hs = arr1[i];
        }
    }

return hs;
}

var arr1 = new Array();
var n = 5;
for (var i = 0; i < n ; i++){
    arr1[i] = Number(prompt("Enter a number: "));
    // arr1.push(input);
};

var highestScore = highestScore(arr1);
document.write(highestScore);