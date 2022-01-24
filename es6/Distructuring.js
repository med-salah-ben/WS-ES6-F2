// 1 -Assigning array items to var
const [a,b,c] = [1234,"hello",true];

// console.log(a);

//2 - Skippig items 

// const [,,y] =[100,"hi",false];
//  console.log(y);

//-3 Assigning the first Value , storing the rest together

const [f,...rest] = ["haythem",27,true,"gomycode",2022,false];

// console.log(f);
// console.log(y);
// console.log(rest);

//4- swapping var change it
let x = true;
let y = false;

 [x,y]=[y,x];
 console.log(y);