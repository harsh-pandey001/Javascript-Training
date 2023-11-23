document.write("Hello")


let a = setTimeout(function(){
  alert("i am harsh")
},2000)

let b =  prompt("Do you want to run the setTimeout ? ")

if("n" == b){
  clearTimeout(a)
}

console.log(a);


