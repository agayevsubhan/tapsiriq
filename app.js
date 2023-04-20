'use strict'
//task1
const rng =document.getElementById("rng")
rng.onclick=function(){
    rng.style.cssText=
    `
    width: 150px;
    height: 150px;
    background-color: blueviolet;
    `
}

const test =document.querySelector(".test")
test.onclick=function(){
test.style.cssText=
`width: 150px;
height: 150px;
background-color: blue;
`
}

const test1 =document.querySelector(".test1")
test1.onclick=function(){
test1.style.cssText=
`width: 150px;
height: 150px;
background-color: red;
`
}

// task2 
const deyisen =document.querySelector(".deyisen")
const btn1 =document.querySelector(".btn1")
const btn2 =document.querySelector(".btn2")
const btn3 =document.querySelector(".btn3")
const son1 =document.querySelector(".son1")
const son2 =document.querySelector(".son2")
btn1.style.backgroundColor="blue"
btn1.onclick=function(){
deyisen.style.cssText=`
width: 150px;
height: 150px;
background-color: blue;
margin-top: 20px;
margin-left: 50%;
`
}
btn2.style.backgroundColor="yellow"

btn2.onclick=function(){
    deyisen.style.cssText=
    `
    width: 150px;
    height: 150px;
    background-color:yellow;
    margin-top: 20px;
    margin-left: 50%;
    
    `
}
btn3.style.backgroundColor="green"
btn3.onclick=function(){
    deyisen.style.cssText=`
    width: 150px;
    height: 150px;
    background-color:green;
    margin-top: 20px;
    margin-left: 50%;
    `
}
//task3

son2.style.height="100px"
son2.style.width="100px"
son2.style.margin="auto"
son1.style.backgroundColor="green"
son1.onclick=function(){
    son2.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
 
}
