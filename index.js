//Events in JS
function clicked(){
    console.log('the button was clicked')
}
window.onload=function(){
   
    console.log('the document was loaded')
}

firstContainer.addEventListner('click',function(){
    console.log("click hua")
})

//JAVASCRIPT console API
console.log("Hello World", 4+6);
console.warn("this is a warning");
console.error("this is an error");
console.clear()
console.assert(4==6)
var num1=34;
var num2=56;
console.log(num1 + num2);

//DataTypes in JS
var str1 = "this is a string";
var num1= 455;
var num2=56.65;
//objects
var marks ={
 ravi:34,
 shubham:78,
 poonji:99
}
console.log(marks)
//Booleans
var a=true;
var b=false;
console.log(a)
console.log(a,b)

//undefined and null
var und;
console.log(und);

var n=null;
console.log(n);

//arrays

var arr=[1,2,"poonji",3,4,5]
console.log(arr)
console.log(arr[4])
console.log(arr[2])

//Operators in JS
// Arithemetic operators
var a=10;
var b=5;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

//Assignment operators
var c=b;
console.log(c+=2);
console.log(c-=2);
console.log(c*=2);
console.log(c/=2);

//Comparison operators
var x=67;
var y=86;
console.log(x==y);
console.log(x>=y);
console.log(y>x);

//Logical Operators
console.log(true&&true);
console.log(true||false);
console.log(!false);

//Functions in JS

function avg(a,b)
{
 return(a+b)/2;
}

c1=avg(4,6);
console.log(c1);

//conditionals in JS

var age=34;
if(age>8){
 console.log("you are not a kid");
}
else{
 console.log("you are a kid");
}

//loops

var arr=[1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++)
{
 console.log(arr[i])
}

//dates in js

let myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getHours())
console.log('hello world!');


