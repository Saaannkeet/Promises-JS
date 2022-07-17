
//Que1:: write one example explaining how you can write a call back function?


function message() {
	console.log("I am callback function");
}

function getSum(callback) {	
    callback();
}

getSum(message);  




// que2::creat an example of call back function 

const x = ()=> {
    console.log("this is function x")
}
const y = (cb) =>{
    console.log("this is function y")
    cb()
}
y(x);


//que3:: Create a promise function accepting a argument, if yes is passed to the function then
//  it should go to resolved state and print Promise Resolved, and if nothing is passed then
//   it should go to reject state and catch the error and print Promise Rejected 

const prom =(number) => {
 
    return new Promise((resolve,reject) =>{
 
     if(number =="yes"){
         resolve(number)
     }else{
         reject("Promise Rejected")
     }
    })
 }
 
 prom("yes").then((data)=>{
     console.log(data);
 }).catch((error)=>{
     console.log(error);
 });


//que4:: write a promise function to print numbers from 1 to 7 ,in which 1 should be printed after 1sec,
// 2 should be printed after 2sec,3 should be printed after 3sec, and so on 

// Numbers 
// 1
// 2
// 3
// 4
// 5
// 6
// 7

const arr=[];
for (let i=0;i<8;i++){
    const promise= new Promise(function (resolve,reject){
      setTimeout(()=>{
     res(i);
    },1000*i);
    })
arr.push(promise);
}
for (let i=0;i<arr.length;i++){
arr[i].then(data=>{
  console.log(data);
}).catch(error=>{
  console.log(error);
})
};
    
 


//que5::   create an example of callback hell function 
function one() {
    setTimeout(function() {
      console.log('1. First thing calling Second thing');
      two();
    }, 2000);
  };
  
  function two() {
    console.log('2. Second thing');
  }
  
  function three() {
    setTimeout(function() {
      console.log('3. Third thing calling fourth thing');
      four();
    }, 1000);
  }
  
  function four() {
    console.log('4. Fourth thing');
  }
  
  one();
  three();


// que6::create example and explain promises function 

var promise = new Promise(function(resolve, reject) {
    const x = "i am x";
    const y = "i am x"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success');
        }).
        catch(function () {
            console.log('error');
        });
    

//que7:: create example an explain asycn await function 

async function Result(){
    console.log('Result');
    let res=await Result(20);
    return res;
}
console.log('Before calling Result')
let a=Result()
console.log('After calling Result');
console.log(a);
a.then((data)=>{
    console.log(data);
})


//que8::Create examples to explain promise.all function.

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });



//que9:: write a promise function to print numbers from 1 to 7 ,in which 1 should be printed after 1sec,
// 2 should be printed after 2sec,3 should be printed after 3sec, and so on 
// explain callback hell 
// Numbers 
// 1
// 2
// 3
// 4
// 5
// 6
// 7

  function value1(){ 
    console.log('1');
}
setTimeout(value1,1000);

function value2(){ 
    console.log('2');
}
setTimeout(value2,2000);

function value3(){ 
    console.log('3');
}
setTimeout(value3,3000);

function value4(){ 
    console.log('4');
}
setTimeout(value4,4000);

function value5(){ 
    console.log('5');
}
setTimeout(value5,5000);

function value6(){ 
    console.log('6');
}
setTimeout(value6,6000);

function value7(){ 
    console.log('7');
}
setTimeout(value7,7000);

