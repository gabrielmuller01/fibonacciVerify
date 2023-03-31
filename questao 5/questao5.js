var string = "Exemplo de String";
var newString = ""

for (var i = string.length - 1; i >= 0; i--){
    newString += string[i];
}

console.log(newString);