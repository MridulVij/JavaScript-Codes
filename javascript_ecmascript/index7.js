// Arrays in js

// declaration of Array -> var array_name = [];

// 1. Traversing of Array in js
var myName = ['Mridul', 'vij', 'M', 'R', 'I', 'D', 'U', 'L'];


//method 1
console.log("Method 1");
for(var i=0; i<myName.length; i++){
    console.log(myName[i]);
}

//method 2
// "for of loop" used for elements printing
console.log("Method 2");
for(let elements of myName){
    console.log(elements);
}

//method 3
// "for in loop" used for index printing
console.log("Method 3");
for(let index in myName){
    console.log(index);
}

//method 4
// for each loop to get element, index etc
console.log("Method 4");
myName.forEach(function(element, index, array){
    console.log(element + " -> Index: " + index + " " + array)
});







// 2. Searching and Filter in an Array
// Method 1


// 3. How to Sort and Compare an Array
/* */



// 4. How to Insert, Add, Replace, and Delete Elements in Array(CRUD) operation in Array
var myArray = ['aalu', 'bengen', 'khiira', 'pyyaz'];

// arrayName.push(); -> is used to push element in array from back side it returns updated size of array
const count = myArray.push('Tomato');
console.log('Push in Array')
console.log(myArray);
console.log(count);

// arrayName.unshift(); -> is used for push elements in array from front side and return updated size of array
const count1 = myArray.unshift('Pea',);
console.log('')
console.log(myArray);
console.log(count1);

// #1 arrayName.pop(); -> is used to pop/delete last element from array and changes length of an array
const myArray2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const count2 = myArray2.pop();
console.log(myArray2);
console.log(count2);

// #2 arrayName.pop(); 
const myArray3 = ['A', 'B', 'C'];
console.log(myArray3.pop());

// arrayName.splice(); ->  this is used to insert element in last via provided index of array
const NewVegitable = myArray.splice(myArray.length,0,"Dec");

console.log(myArray)
console.log(NewVegitable)


// 5. Map(), Reduce(), Filter() ->
const arr = [1,2,3,4,5,6,7,8,9];

let newArr = arr.map((curElem, index, arr)=> {
    return curElem;
})
console.log(arr)
console.log(newArr)
