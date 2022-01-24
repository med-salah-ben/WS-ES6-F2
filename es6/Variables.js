// let + Var

const testLet = ()=>{
  
    if(true) {
       
        var x = "X" ; 
       

        let y = 5;
        console.log("in block: " + y );
        console.log("in block: " + x );
         y ="Y"
         console.log(" second ²in block: " + y );
    }
    x =10
    console.log(x);
    

    console.log(y);  


}

// testLet()

// premitive Data 

const x = 10;
 console.log(x);

 // non premitive data 

 //object exp

 const obj = {};
  // obj = {name:"haythem"}
  obj.name ="haythem";
  obj.age = 28;

//  console.log(obj);

 // Array exp

 const arr = [];
 
//  arr =[1,2,3]
//  arr.push({name:"dante",age:21})  
arr.push(1)
// console.log(arr);


