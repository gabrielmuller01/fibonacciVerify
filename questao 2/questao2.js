function f(n){
    var myArray= [0,1];
    var i = 2;

    while (myArray[i - 1] < n){
        myArray[i] = myArray[i-1] + myArray[i-2];
        i++;
    }
    return myArray;
}

function verifyFibo(){
    
    var myArray = document.getElementById("numb").value
    var fibo = f(myArray);

    if(fibo.includes(parseInt(myArray))){
        document.getElementById("resposta").innerHTML = `${myArray} pertence à sequência de Fibonacci.`
    }else {
        document.getElementById("resposta").innerHTML = `${myArray} não pertence à sequência de Fibonacci.`
    }
}