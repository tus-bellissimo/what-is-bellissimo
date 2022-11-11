function butotnClick(){
    alert('Click');
}

// let button = document.getElementById('btn1');
// button.onclick = function() {
// console.log('yes');
// }

document.getElementById("table2").style.display ="none";
document.getElementById("table3").style.display ="none";

btn1.onclick = function() {
    document.getElementById("table1").style.display ="block";
    document.getElementById("table2").style.display ="none";
    document.getElementById("table3").style.display ="none";
}

btn2.onclick = function() {
    document.getElementById("table1").style.display ="none";
    document.getElementById("table2").style.display ="block";
    document.getElementById("table3").style.display ="none";
}

btn3.onclick = function() {
    document.getElementById("table1").style.display ="none";
    document.getElementById("table2").style.display ="none";
    document.getElementById("table3").style.display ="block";
}
