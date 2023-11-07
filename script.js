function getTimeOfDayGreeting() {
    var x = document.getElementById("greet");
    const currentTime = new Date();
    const currentHour = currentTime.getHours();


    if (currentHour >= 5 && currentHour < 12) {
         
        x.innerHTML = "Good morning! the time is "; 
    } else if (currentHour >= 12 && currentHour < 17) {
        x.innerHTML =  "Good afternoon! " ;
    } else if (currentHour >= 17 && currentHour < 21) {
        x.innerHTML = "Good evening!";
    } else {
        x.innerHTML = "Good night!"  ;
    }
}



