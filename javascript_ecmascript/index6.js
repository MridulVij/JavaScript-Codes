// ECMA Script in js


//1. // Variables
// 1. var = for global declaration
// 2. const = for local scope block scope
// 3. let = for local scope block scope it work only locally inside function only

var v1 = "Hello"
v1 = "beta"
console.log(v1)
let v2 = v1
console.log(v2)
const v3 = v2
console.log(v3)


// var & let variable keyword is same we can change values and access globally
// const is like kotlin val it does not change after assigning value



function table(){
    for(var i=1; i<=10; i++){
        // Local variable declaration -> const "Variable"
        const tabl = 10;
        
//2. // Template Literals
    // method 1
        
        // Basic Concatination Techniques
        //console.log(tabl+"*"+i+"="+tabl*i)

        // Template Literals -> `${}`  ,backtick-> ``
        // using in console log
        console.log(`${tabl} * ${i} = ${tabl * i}`)
    }
}
table();

    // method 2
    //Default Parameters
    function sum(){
        var a = 10, b = 20;
        // template strings , literals 
        // using in string
        return `the sum of a&b is: ${a+b}`;
    }
    console.log(sum());
    

//3. // Fat Arrow Function -> it requires first declaration then function calling

// method 1
const fatArrow = () => {
    let a = 5, b = 6;
    return `The Sum of Two numbers is ${a+b}`;

}
console.log(fatArrow());

// method 2
const fatArrow2 = () => `The Sum of A & B is: ${(a=10)+(b=20)}`

console.log(fatArrow2());


// normal function - In this the normal function call backs will be before or after its declaration 
// fat arrow function - but in case of fat arrow function they call only after declaration it is rule of fat arrow function



