//3 ways

//1  Declaration
function add(a,b){
    return a+b ;
}

//2  Expression

const multi = function(x){
    return x*x
}

//3 arrow func

const sub = a =>{
    return a-5
}


console.log(sub(10));

let Room = [
    {name:'haythem',age:27},
    {name:'jhon',age:59},
    {name:'deo',age:16},
    {name:'brad',age:43},
    {name:'dante',age:66},
];

let age = Room
  .filter((person)=>person.age>40 && person.age <60)
  .filter((person)=> person.name === "brad")
  .map((person)=>person.name)
  console.log(age);
