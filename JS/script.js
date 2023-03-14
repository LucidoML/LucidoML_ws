const enterNum = prompt("Enter A Number");


function checkNumber(Int){
        if(Int<0){
            console.log("Negative Number");
        }else if(Int==0){
            console.log("Zero");
        }else if(Int>0&&Int<=10){
            console.log("Small Positive Number");
        }else if(Int>10&&Int<=100){
            console.log("Medium Positive Number");
        }else if(Int>100){
            console.log("Large Positive Number");
        }else{
            console.log("Invalid Character!");
        }
}
checkNumber(enterNum);