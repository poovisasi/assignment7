function add()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)+parseInt(y);
document.getElementById("result").innerHTML="Result is =:"+z;
}
function sub()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)-parseInt(y);
document.getElementById("result").innerHTML="Result is =:"+z;
}
function mulpt()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)*parseInt(y);
document.getElementById("result").innerHTML="Result is =:"+z;
}
function div()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)/parseInt(y);
document.getElementById("result").innerHTML="Result is =:"+z;
}
function xsquare()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)*parseInt(x);  
document.getElementById("result").innerHTML="Result is =:"+z;
}
function xcube()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var z=parseInt(x)*parseInt(x)*parseInt(x);   
document.getElementById("result").innerHTML="Result is =:"+z;
}