let array = [15,23,16,1,9,50];
// let x = array;
// x.push(200)
// console.log(array);
// console.log(...array);
// let combine = [...array,100,500];
// console.log("Combine ; ",combine);
// console.log("arr : ",array);
// let x= array * 2;
// console.log(x);
let array1 = array.map(el=>el*2)
// console.log(array1);

let array2 = array.filter((el,i)=>el>20)
// console.log(array2);

let array3 = array.reduce((acc,cur)=>acc+cur,6)
// console.log(array3);

let array4 = array.find(el => el >10)
// console.log(array4);
let array5 =array.findIndex((el)=>el>20)
// console.log(array5);

function x(){
    let array6 = [2,20,34,15,19,40,5]
    console.log(array6.length);

    for(let i = 0 ; i <= array.length   ;i++) {
        console.log("length",array6.length-1);
        array6[i]= array6[i]+1
        console.log(i);
    }
    console.log(array6);
}
x()

