function ex1(){
    var i = 1;
    var result = 0;
    var z = document.getElementById("numberZ").value *1;
    if(z === 0){
        alert("Vui lòng nhập vào số z")
        return;
    }
    while(result < z){
        result += i;
        i++;
    }
    document.getElementById("divresult1").innerHTML= "Số nguyên dương nhỏ nhất là: "+ i;   
};


function ex2(){
    var x = document.getElementById("numberX").value*1;
    var n = document.getElementById("numberY").value*1;
    var result = 0;
    if(n===0 || x ===0){alert("Vui lòng nhập số cần tính")
    return;}

    for(var i = 1; i <= n; i++){
        result += Math.pow(x,i);
    }

    document.getElementById("divresult2").innerHTML = "Tổng giai thừa của: " + x+"^"+n + " là: " + result;
};


function ex3(){
    var n = document.getElementById("volume").value*1;
    var result = 1;
    if(n===0){alert("Vui lòng nhập số cần tính")
    return;
    }
    for(var i = 1 ;i <= n; i++){
        result *= i;}
    document.getElementById("divtinh").innerHTML="Giai thừa của " + n + " là: " + result;
};


function ex4(){
    var content = "";
    var x = document.getElementById("div").value*1;
    if(x === 0){
        alert("Vui lòng nhập số div cần tạo.")
        return;};
    for(var i = 0; i < x; i++){
        if((i +1) %2 === 0){
          content += "<div style=background:blue;>Div Chẵn</div>";
        }else{
          content += "<div style=background:red;>Div Lẽ</div>"
        }
    }; 
    
    document.getElementById("resultdiv").innerHTML= content;    
};


function ex5(){
    var e = +document.getElementById("numberN").value;
    var t = "";

    if (e===0){alert("0 không phải là số nguyên tố. Vui lòng nhập số khác")
    return;}
    if (e===1){alert("1 không phải là số nguyên tố. Vui lòng nhập số khác")}
    for ( var i = 1; i<= e; i ++){
        checkPrime(i) && (t +=  " " + i + ",")
    };
    document.getElementById("resultN").innerHTML = "Các số nguyên tố nhỏ hơn " + e + " là: " + t;};

function checkPrime(e){
    if(e < 2) return ;
    for(var t = 2; t <= Math.sqrt(e); t ++ )
    if(e%t === 0) return!1; return!0
}


