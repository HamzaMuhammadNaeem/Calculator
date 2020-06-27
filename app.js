function getNumber(num){
    var result = document.getElementById("result");
    result.value += num; 
}

function clearNumber(num){
    var result = document.getElementById("result");
    result.value = "0";
}

function getResult(num){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}