// document.write("First javascript class")
// document.write("<br>")
// document.write("script")
// document.write("<br>")




// console.log("javascript file")




// document.getElementById("lorem").innerHTML="hello"
// document.getElementsByName("abc")[0].innerHTML="1234567890"

// console.log("100")
// document.write("<br>")

// var me = "Name:bhuwan"
// document.write(me)
// document.write("<br>")

// var em="class:11"
// document.write(em)
// document.write("<br>")

// var sam="roll:10213"
// document.write(sam)
// document.write("<br>")
// document.write("<br>")


// const name = "bhuwan";
// document.write(name)
// document.write("<br>")

// const clas = 11
// document.write(clas)
// document.write("<br>")
// document.write("<br>")


// const cars = ["Honda", "Mazda", "BMW"];
// document.write(cars [1])
// document.write("<br>")


// var fruits = ["apple", "banana", "kiwi", "mango", "orange"]
// document.write(fruits[4])
// document.write("<br>")


// num.forEach(function(element,index){

//     console.log("<br>")
//     console.log("index of "+element+" is "+index+".")
// })

// num.map((a)=>{
//     num =num+1
//     console.log(a)




//     // })  
    let num = [1,0,2,43,7,4,5,8, 78,45,89]

    const num1 = num.filter((a)=>{
        return a <10;

    });
console.log(num1);
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15


//local scop
//block scop 
//global scop


// const test = ()=>{
// let b ="Hellow how are you"
// let obj={
//     Name :"Bhuwan",
//     address : "lalitpur",
//     phone:9878675645,
//     Roll:78

// }
// let num = [1,0,2,43,7,4,5,8, 78,45,89]
// var xyz="hellow how are you.? where are you from."
// return {
//     xyz,
// Array:num,
//  Object:obj,
//  String_Variable:b
// }

// }
// let b = test()
// console.log("result of variable xyz:",b)




let name = "bhuwan brai"
let b = 89;


const demo = () => {
    // let name = "bhuwan"
    let b = 100;

    console.log("Name of person", name)
    console.log("Name of person", b)
}
demo()
console.log("Name of person Student", name)
console.log("Name of person", b)




// document.write("")
// document.write(index)


const test3=()=>{


{
    let a = "banana"
    let b = 11

console.log("there are",b,a)
}

{
    let a = "apple"
    let b = 20

console.log("there are",b,a)
}
}
test3()