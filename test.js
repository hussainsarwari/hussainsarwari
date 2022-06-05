


/* Type of data type
1.primitive data type 
such as :int,float,long,char,double..
2.non primitive data type
such as: Array,classes,interface...
*/

	document.write("hi how are you");
	console.log("this will show in console");
 alert("this will show in alert massege");
 
 // create variables
/*

Arithmetic operators:


+ sum : 1+2=3
- subtraction : 1-2=-1
* multiplication :1*2=2
** exponentiation : 2*2=4
/ divisiom :4/2=2
% modulus :3%2=1
++ increment
-- dicrement




Assignment operators:


= :x=y
+= : x+=y => x=x+y
-= : x-=y => x=x-y
*= : x*=y => x=x*y 
/= : x/=y => x=x/y
%= : x%=y => x=x%y
**= : x=x**y


comparison operators


== equal to
=== equal value and equal type
!= not equal
!== not equal value and not equal type
> greater than
< less than 
>= greater than or equal to
<= less than or equal to
? ternary operator




Logic operators


&&  :   and
||  :   or
!   :   not




*/
 
 let variable1="hussain";
 var variable2;
 const variable3=12;//we cant change the variable
document.write(variable1.length);// 7
document.write(variable1.slice(1,4));// uss
document.write("   "+variable1.substr(1,5));//ussai
document.write('  '+variable1.includes("n"));//true
variable2=variable1.toLowerCase();//change HUSSAIN  to hussain
console.log(variable2);//hussain
variable2=variable1.toUpperCase();//change the hussain to HUSSAIN
console.log(variable2);//HUSSAIN
console.log(variable1.search("u"));//this show the index of "u"
console.log(variable1.replace("hussain","hussain changed "));//hussain changed
variable1.trim();//remove the speace 

console.log(variable1.startsWith("h"));//true

console.log(variable1.startsWith("k"));//false

console.log(variable1.endsWith("n"));//true

console.log(variable1.endsWith("k"));//false
console.log(variable1.padStart(10,4));//444hussain
console.log(variable1.padEnd(10,0));//hussain000


document.write((variable1 =="ali") ? "your name is ali" : "your name is hussain ")//your name is ali
console.log(variable1===123)// false => the type and value  of variable is not equale 

//document.location.reload()  => this refresh the web page


//change datatypes

let a=12;
variable2=Number(variable1);//changing the string to number
console.log(variable2);//NaN

variable2=String(a);//changing the number the string
console.log(variable2);


var variable4;
console.log(Boolean(variable4));//false because we did not set value for variable4
variable4="dslfj";
console.log(Boolean(variable4));//true
variable4=0
console.log(Boolean(variable4));//false
variable4=4;//another numbers 
console.log(Boolean(variable4));//true



let variable5;//undefined
let variable6=null;//
variable6+234;//234
variable5 +3;//NaN


//Array


let newarray=[1,2,3,4,"text",0.12];
document.write(newarray);//1,2,3,4,"text",0.12
console.log(newarray);//[1,2,3,4,"text",0.12]


//change array to string
var array=[1,2,3];
var d=array.toString(array);//chenging the array to string
console.log(d);//1,2,3
console.log(array.join('+'));//1+2+3 => changed to string
console.log(array.join('&'));//1&2&3 => changed to string



//change the string to array

d="hussain,ali,mohammad";
console.log(d.split(','));//change string to array

d="hussain ali mohammad";
console.log(d.split('a'));//["huss","in ","li moh","mm","d"] ichange string to array


// add , remove values to an array


array.push("newvalue");//adding a new value to array
console.log(array);//[1,2,3,'newvalue']
 array.pop("newvalue");//remove the newvalue
 console.log(array);//[1,2,3]
 array.unshift("ali");//adding new value
 console.log(array);//['ali',1,2,3]
 array.shift();//remove the ali
 console.log(array);//[1,2,3]
 array.splice(1,2);//remove the 2 and 3
 console.log(array);//[1]
array=[1,2,3,4,5,6,7]
array.splice(2,3);//remove the 3,4,5
console.log(array);//1,2,6,7
array.splice(2,0,3,4,5);//add new value
console.log(array);//[1,2,3,4,5,6,7]
array=["a","s","d","f"];
array.splice(2,0,"ali","mohammad");//add ali and mohammad
console.log(array);//[a,s,ali,mohammad,d,f]
array.splice(2,2);//remove ali and mohammad
console.log(array);//["a","s","d","f"]
array.slice(0,3);//remove a,s,d
console.log(array);//d




//sort the array

array=[7,6,5,4,3,2,1];
console.log(array.sort());//[1,2,3,4,5,6,7]
console.log(array.reverse());//[7,6,5,4,3,2,1]
array=[1,4,2,22,42,3,33,5];
console.log(array.sort());//[1,2,22,3,33,4,42,5]
console.log(array.sort((a, s) => a-s));//[1,2,3,4,5,22,33,42]
console.log(array.sort((a, s) => s-a));//[42,33,22,5,4,3,2,1]



//search in an array

console.log(array.includes(4));//true => because 4 is in array
console.log(array.includes("text"));//false => because "tesxt" is not in array

//array1 + array2=newarray

var array2=["hussain","ali",1,2,3];
console.log(array.concat(array2));//[42, 33, 22, 5, 4, 3, 2, 1, 'hussain', 'ali', 1, 2, 3]
 var array3=[3,2,1];
 console.log(array.concat(array2,array3));//[42, 33, 22, 5, 4, 3, 2, 1, 'hussain', 'ali', 1, 2, 3, 3, 2, 1]

//find the index of a value in array

console.log(array2.indexOf("ali"));//1
console.log(array2.indexOf("mohammad"));//-1 => because "mohammad" is not in array2

console.log(array2.find((n)=>n>=2));//3
console.log(array2.filter((n)=>n>=2));//[2,3]

//multi dimantion 

let multi_array=[
[1,2,3],
["1","2","3"],
["mohammad","ali"],
];


//Condition
var num=12;
console.log((num>=18)? "you can login" : "you can't login");
//or we can write 
if (num>=18) {
console.log("you can login");
}
else
{
	console.log("you can't login");
}


num=14
if (num>=18) {
console.log("you can login");
}
else if(num<=18){
	console.log("you can't login")
}

else{
	console.log("you entred wrong number");
};



//switch

switch(num){
	case 18:
	console.log("your age is 18");
	break;
	case 13:
	console.log("your age is 13");
	break;
	case 15:
	console.log("your age is 15");
	default:
	console.log("i dont know your age");
	break;
}


//while

while (num<=30){
	console.log("hi");
	num++;
}


// do while

do {
	console.log("hi");
	num++;
}while(num<14);

//for

for (var i = 13 ; i >= 0; i--) {
	console.log("for ");
}

//forEach

var arr=[2,3,4,5,6,7];
arr.forEach(arr => console.log("hi"));



//fint  initial numbers


let num1=100000000003;
let n=2;
while( n<=(parseInt(num1**0.5)+1))
{
	if(num1%n==0){
		console.log(" this numeber is not initial number !");
break
	}n++
}
console.log("this is a initial number !");



// methods or functions


/*
1. function function_name(argument){
	codes
}

2. let name= function(){
	code
};

 

 what is difference between these ?
 in 2 we cant call function if function created after call, but in 1 we can call function berfore call or after call



*/
function my_function(){
	console.log("it is a function");
}

my_function();
let aa=function (){
	console.log("it is function");
};
aa();


function sum(a,s){
	console.log("the result of a+s is ", a+s);
}

sum(1,2);

function fu(num_1,num_2) {
	return  (num_1+num_2);
  console.log("jkdshfkj");//this will never show 
}

let m=fu(0,5);
console.log(m);



var sum2= get => console.log(get); 
sum2(3);


var var3= (get1,get2)=> get1+get2;
console.log(var3(3,5));

var var4= name => {
	console.log("your name is ",name)
}
var4("hussain");

//objests



/* 
  var or let or const name = {
	kay : value,
	kay : valie,
  }
*/
let studient={
	name:"hussain",
	lastname:"sarwari",
	age:21,
	field:"computer since",
	email:"sldf@gmail.com",
	subject:["math", "java"],
	showname(){
		console.log(this.name);
	},
   call_fun(){
   	this.showname();
   },
   showsubjects(){
   	this.subject.forEach((field,index) => console.log(index,field));
   },
}
console.log(studient)


studient.name="ali";//change the property of object (studient)
studient['lastname']="mohammadi";//we can also change the property of object


console.log(studient);


studient.showname();
studient.call_fun();
studient.showsubjects();



let subjects=[
{
	name:"math",
	deta:"2020/2/12",
	teacher:"ahmad",

},
{
	name:"java",
	deta:"2020/4/4",
	teacher:"mohammad",
}
]
console.log(subjects);


let q=[
function sum(a,s){
	return a+s;
},
function manfi(a,s) {
	return a-s;
}
];

console.log(q[0](1,2));

let qq=true;
while(qq){
let msg=window.prompt("Please enter pasword ");

if (msg=="99@hussain") {
	console.clear();
  qq=false;
}else {
	alert("you cant login, your pasword is wrong");
  
}}

//     DOM      

var h =document.getElementById('header')
h.style.color='red';//change the color of DOM

h=document.getElementsByClassName("content");
h[0].style.fontSize="25px";//change the fontsize of first paragraph
h[1].style.fontSize="15px";//change the font size of second paragraph


h=document.getElementsByTagName("p");//this select all p

console.log(h[0].innerText);//will show the text 
h[1].innerText="text changed";//change only text
h[1].innerHTML="<h1>tag changed";//change the html tag
h[1].innerText+=" new text";
h[1].innerHTML+="<h4> added new html tag</h4>";//added new html tag
console.log(h[1].innerContent)//show all content of a html tag ( hidden contents)
h=document.querySelector("p")//this select only first p
console.log(h);
//h=document.querySelector("#text") this select element by css 
h=document.querySelectorAll("p")//this select all p (css)
console.log(h);


console.log(h.innerContent);// show the content of a html tag
 
var s=document.querySelector("#a");
s.getAttribute("id");
s.setAttribute("title","this title added");//add new attribute to html tags


var links=document.querySelectorAll("a");
links.forEach(link => {
	var   href =link.getAttribute("href");
	console.log(href);
	link.setAttribute("href",href.replace("https://www.google.com","www.gmail.com") )
  link.style.color ="red";//edit attribute html tag
  link.href="www.lsdfjl.com";



// how to add & remove class to html tags

console.log(link.classList);
link.classList.add("new_class");//add new class
link.classList.remove("new_class");//delet class
link.classList.toggle("la");//if the html tag has this class (la) toggle will delet if dont have toggle add class la
})
   
//how to access to child and parent tag  


var btn=document.querySelector("button");
btn.addEventListener("click",e=>{
	e.target.textContent="clicked";
	
})
window.addEventListener("online",fg =>{
	alert("you are online")
})
window.addEventListener("offline",dfd =>{
alert("you are offline")
})

// accordion


let accordion=document.querySelector(".accordion")
Array.from(accordion.children).forEach( wrapper =>{

	wrapper.querySelector("span").addEventListener("click",e=>{
	
	let span = e.target
  let wrapper=span.parentElement
  wrapper.classList.toggle("show")
  Array.from(accordion.children).forEach( w =>{
  	if(w!=wrapper){
  		w.classList.remove("show")
  	}
  })
 })
})