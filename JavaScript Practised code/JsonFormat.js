// let JSONobj = {
//     Name: "Harsh",
//     Designation: "Associate Software Engeener Trainee",
//     Company: "CubeXO",
//     Experiance: "2 months",
//     College: "School of Computer Science & IT"
// }

// console.log(JSONobj);

// let yourname = JSON.stringify(JSONobj)
// console.log(yourname) // here Json is converted into String

//  yourname = yourname.replace("Harsh","Anshu"); //here the value of name is changed 
// yourname = yourname.replace("CubeXO","Accenture"); //here the value of name is changed 

// yourname =  JSON.parse(yourname)
// console.log(yourname) // here string is converted into json 

// function addRow() {

//     let table = document.getElementById('mytable')

//     let row = table.insertRow(-1);

//     let c1 = row.insertCell(0)
//     let c2 = row.insertCell(1)
//     let c3 = row.insertCell(2)

//     c1.innerText = JSONobj.Name
//     c2.innerText = JSONobj.Designation
//     c3.innerText = JSONobj.College
// }

// --------------------------------------------weather Fetch in the form of JSON---------------------------------

// http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=London&aqi=no
// http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=${city}&aqi=no
// async function Api_Call(city) {
//    let prom =  await fetch(`http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=${city}&aqi=no`)
//     let data = await prom.json();
//     console.log(data)
//     addRow(data)
// }


// Api_Call("Mumbai");
// Api_Call("London");
// Api_Call("Dubai");
// Api_Call("Bhopal");

// Promise.all[Api_Call("Mumbai"),Api_Call("London"),Api_Call("Dubai"),Api_Call("Bhopal"),Api_Call("Indore")]

// function addRow(data) {

//     let table = document.getElementById('mytable')

//     let row = table.insertRow(-1);

//     let c1 = row.insertCell(0)
//     let c2 = row.insertCell(1)
//     let c3 = row.insertCell(2)
//     let c4 = row.insertCell(2)

//     c1.innerText = data.location.name
//     c2.innerText = data.location.country
//     c3.innerText = data.current.temp_c
//     c4.innerText = data.current.wind_kph
// }

// --------------------------------------------------------------------------------------------------------------


// --------------------------------------------Fetching data local json file-----------------------------------

function json_call() {
    fetch("./JavaScript Practised code/test.json").then((response)=>{
        return response.json()
    }).then((data)=>console.log(data))
}


json_call()
