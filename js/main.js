var answer = document.getElementById("answer");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var typedNumber = document.getElementById("typedNumber");
typedNumber.value = 1;
answer.textContent = 0;


plus.addEventListener('click', function(e) {
    // var typedNumber = 1;
    var returned = Number(typedNumber.value); 
    var guess = Number(answer.textContent);
    var findOut = returned + guess;
    answer.textContent = findOut;
    console.log(findOut);
        if (findOut < 0){
            answer.style.color = "red";
        } else {
            answer.style.color = "black";
        }   
})

minus.addEventListener('click', function(e) {
    // var typedNumber;
    var returned = Number(typedNumber.value); 
    var guess = Number(answer.textContent);
    var findOut = guess - returned;
    answer.textContent = findOut;
    console.log(findOut);
        if (findOut < 0){
            answer.style.color = "red";
        } else {
            answer.style.color = "black";
        }    
})

