var div = document.createElement("div")
div.className = "main";


var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click",date_generator)
div.append(input,button)
document.body.append(div);

var Birthdate1 = document.createElement("p");
var Birthdate2 = document.createElement("p");
var Birthdate3 = document.createElement("p");
var Birthdate4 = document.createElement("p");
var Birthdate5 = document.createElement("p");
var Birthdate6 = document.createElement("p");
var Birthdate7 = document.createElement("p");
document.body.append(Birthdate1, Birthdate2, Birthdate3, Birthdate4, Birthdate4, Birthdate6, Birthdate7);

function date_generator(){
    var res = document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currentdate = new Date();
    console.log(currentdate,inputdate);
    var millisec = parseInt(currentdate.getTime()-inputdate.getTime());
    console.log(millisec);
    var secdif = Math.floor(millisec/1000);
    console.log(secdif);
    var mindif = Math.floor(secdif/60);
    console.log(mindif);
    var hrdif = Math.floor(mindif/60)
    console.log(hrdif);
    var daydif = Math.floor(hrdif/24);
    console.log(daydif)
    var yeardif = currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardif);
    var month = (yeardif*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(month);
    Birthdate1.innerHTML = 'Years:' +yeardif;
    Birthdate2.innerHTML = 'Months:' +month;
    Birthdate3.innerHTML = 'Days:' +daydif;
    Birthdate4.innerHTML = 'Hours:' +hrdif;
    Birthdate5.innerHTML = 'Minutes:' +mindif;
    Birthdate6.innerHTML = 'Seconds:' +secdif;
    Birthdate7.innerHTML = 'Milliseconds:' +millisec;
}

