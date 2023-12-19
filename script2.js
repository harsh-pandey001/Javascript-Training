let promis =  fetch("http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=London&aqi=no")
promis.then(response =>{
  console.log(response.ok);
  return response.json()
}).then(data => {
    console.log(data);
 })

// hoisting
// console.log(a)
// var a = 55;

//  hit();
//  hit1()
//  function hit (){
//  console.log("hello world");
//  }
 
//  let a =  hit1() {

//  }


