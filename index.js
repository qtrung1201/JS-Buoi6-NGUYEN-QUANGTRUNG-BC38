
function ex5(){
    var n = document.getElementById("volume").value*1;
    var result = 1;
    if(n===0){alert("Vui lòng nhập số cần tính")
    return;
    }
    for(var i = 1 ;i <= n; i++){
        result *= i;}
    document.getElementById("divtinh").innerHTML="Giai thừa của " + n + " là: " + result;
}

