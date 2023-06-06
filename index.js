var age = Number (prompt("ENTER YOUR AGE"));
function measure(age){
if(age < 5){
    return "tiny"; 
}
else if(age < 10){
    return "small";
}
else if(age < 15){
    return "medium";
}
else if(age < 20){
    return "large";
}
else {
    return "huge";
}
}
console.log(measure(age));

// task 2
var num1 = Number (prompt("ENTER YOUR num1"));
var num2 = Number (prompt("ENTER YOUR num2"));
var opr = (prompt("ENTER YOUR operator"));

function parameter(num1,num2,opr){
if(opr === "+"){
   return num1+num2;
}

else if(opr === "*"){
   return num1*num2;
}
else{
  return "enter a valid opr"
}
}
console.log(parameter(10,20, "+"));





