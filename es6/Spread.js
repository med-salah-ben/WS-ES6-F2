function sum(x,y,z){
    return x + y +z
}
 let input = [2,3,5]

// console.log(sum(...input));//10

//2
// console.log(Math.max([2,1,5,-3,-8,9]));//NAN
// console.log(Math.max(...[2,1,5,-3,-8,9]));//9

//3
let arr = [1,2,3];

let copieArr = [...arr];
copieArr.push(9);
// console.log(arr);//1,2,3
// console.log(copieArr);//1,2,3,9


//4 

let ClassS = ['Achraf','Shadhly'];
let room = ['Gomycode',"haythem",...ClassS]


console.log(room);