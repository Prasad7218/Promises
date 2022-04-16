// Exrcise1
let promise1=new Promise((resolve,reject)=>{
  resolve(3);
})
let onResolve=(value)=>{
  console.log(value);
}
promise1.then(onResolve);



// Exrcise2
let promise2=new Promise((resolve,reject)=>{
  reject("Boo!");
})
let onReject=(string)=>{
  console.log(string);
}
promise2.catch(onReject);



// Excercise 3
const promise3=new Promise((resolve,reject)=>{
  let itShouldResolve=false;
  if(!itShouldResolve){
    resolve("truthy");
  }else{
    reject("falsy")
  }
})

let onResolve3=(string)=>{
  console.log(string);
}

let onReject3=(error)=>{
  console.log(error);
}

promise3.then(onResolve3);
promise3.catch(onReject3);




// Exrcise4
let promise4=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("using setTimeout Exercise is done")
  },4000)
})
let onResolve4=(string)=>{
  console.log(string);
}
promise4.then(onResolve4);

