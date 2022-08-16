// Search more Array Mehods on Online
// primitive datatypes - undefined, null, number, string, boolean, symbol
// reference datatypes - arrays, objects

// var, Let, const

//  conole API:-
// console.log("Hello World")
// alert("Hello");
// document.write("this is document.write");
// console.warn("Warning hai tujko")
// console.error("Error therela hai mai")
// console.assert("4==4");

// JavaScript Variables
// var number = 34;
// var number2 = 45;
// console.log(number  + number2);

// Data types in javascript
// var str1 = "this is a string"
// var str2 = "this is also a string"
// console.log(str2)

// objects
// var marks = {
//     ravi : 45,
//     deepoo : 67,
//     aakash : 77,
// }
// console.log(marks)

//undefined
// var und;
// console.log(und)

// null
// var n = null;
// console.log(n);

// Array
// var arr = [2,3, "jabba",5,6,7];
// console.log(arr);

// operators in javscript
// aritmatic operators  +,-,*, /
// assignment operators +=, *=, /=, -=
// comparition operators ==, <=, >=
// logical operators &&, ||, !

// Functions
// function avg(a,b){
//         c = (a+b)/2;
//         return c;
// }
// c1 = avg(4,8);
// c2 = avg(7,9);
// console.log (c1,c2);

// conditionals in Jaavascript
// If-else
// Loop - for, forEach, while, do-while (break,continue)

// var arr = [1, 2, 3, 4, 5, 6];
// arr.forEach (function (element){
//         console.log(element)
// })

// Array Methods in Javascript
// let myArr = ["Fan", "Camera", 56, null, true ];
// console.log (myArr.length)
// myArr.pop();
// myArr.push("aakash");
// myArr.shift();
// const newLen = myArr.unshift("Aakash");
// console.log(newLen);
// console.log(myArr);
// myArr.toString();
// myArr.sort()

// String methods on javascript
// let myLovelyString = "Harry is a good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(1,9));
// d = myLovelyString.replace("Harry", "Aakash")
// console.log(d);

// Dates in Javascript
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM manupulation = Document Object Model
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("class-success");
// elemClass[0].classList.remove("class-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[1].innerText);
// let k = document.getElementsByTagName('button')
// let tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = 'complete ka dala';
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement.innerText = 'complete ka dala'
// tn[0].replaceChild(createdElement2, createdElement);
// document.location
// document.title
// document.URL
// document.scripts
// document.links
// document.images
// document.domain

// selecting using querry
// sel = document.querySelector('.container');
// sel = document.querySelectorAll('.container');
// console.log(sel);

// EVENTS is javascript
// function clicked() {
//        console.log("the button was clicked")
// }
// window.onload = function () {
//        console.log('the Document was loaded')
// }

// firstContainer.addEventListner('click', function(){
//        console.log("Button is Clicked")
// })
// firstContainer.addEventListner('mouseover', function(){
//        console.log("Mouse on container is Clicked")
// })
// mouseup, mousedown
// draging events all in javascript
// use querry selector to for DOM with eventlistner

// Arrow Function
// Sum = (a,b) => {
//        return a+b;
// }

// SetTimeout and SetInterval
// logKaro = () =>{
//        console.log("Kya log karo log karo lag rakha hai")
// }
// setTimeout(logKaro, 1500);
// clr = setInterval(logKaro, 1500);
// use clearInterval(clr) /clearTimeout(clr)  to cancel setInterval/setTimeout

// Local storage in Javascript
// localStorage.setItem('name' , 'jabba')
// localStorage
// localStorage.clear()
// localStorage.getItem('name')

// JSON : Javascript Object Notation used to exchange data
// obj = {name: "aakash", lenght: 1, a: {that: 'this'}};
// jso = JSON.stringify(obj)
// console.log(jso)
// par = JSON.parse(`{"name": "aakash", "lenght": 1, "a": {"that": "this"}}`)
// console.log(par);

// obj1 = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso1 = JSON.stringify(obj1);
// console.log(typeof jso1)
// console.log(jso1)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Backticks in javaScript
// Template literals
// a = 45;
// console.log(`This is my ${a}`)
