
let sum = " ";
function build(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}
function calc(){
    sum=eval(sum);
    document.getElementById("output").innerHTML= null;
    document.getElementById("output").innerHTML = sum;
   
}
function clr(){
    document.getElementById("output").innerHTML= null; 
     sum = '';
}
function chng(col){
    document.querySelector('#output').style.color='#ff786934';
}