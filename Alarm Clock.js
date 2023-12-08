onload = () => {
    document.getElementById('group1').style.display = "block";
    document.getElementById('group2').style.display = "none";
    document.getElementById('group3').style.display = "none";
}
let alarmSound = new Audio("Alarm Sound.mp3");
setInterval(function(){
    let currentTime = new Date;
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
    let days = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, ", ];
    day.innerHTML = days[currentTime.getDay()];
    date.innerHTML = currentTime.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
    month.innerHTML = months[currentTime.getMonth()];
    year.innerHTML = currentTime.getFullYear();
    if(currentTime.getHours() < 10){
        hrs.innerHTML = "0" + currentTime.getHours();
    }
    if(currentTime.getMinutes() < 10){
        min.innerHTML = "0" + currentTime.getMinutes();
    }
    if(currentTime.getSeconds() < 10){
        sec.innerHTML = "0" + currentTime.getSeconds();
    }
    if(currentTime.getHours() < 24 && currentTime.getHours() >= 12){
        per.innerHTML = "PM";
    }
    if(currentTime.getHours() < 12){
        per.innerHTML = "AM";
    }
    if(currentTime.getHours() == 13){
        hrs.innerHTML = "01";
    }
    if(currentTime.getHours() == 14){
        hrs.innerHTML = "02";
    }
    if(currentTime.getHours() == 15){
        hrs.innerHTML = "03";
    }
    if(currentTime.getHours() == 16){
        hrs.innerHTML = "04";
    }
    if(currentTime.getHours() == 17){
        hrs.innerHTML = "05";
    }
    if(currentTime.getHours() == 18){
        hrs.innerHTML = "06";
    }
    if(currentTime.getHours() == 19){
        hrs.innerHTML = "07";
    }
    if(currentTime.getHours() == 20){
        hrs.innerHTML = "08";
    }
    if(currentTime.getHours() == 21){
        hrs.innerHTML = "09";
    }
    if(currentTime.getHours() == 22){
        hrs.innerHTML = "10";
    }
    if(currentTime.getHours() == 23){
        hrs.innerHTML = "11";
    }
    if(currentTime.getHours() == 0){
        hrs.innerHTML = "12";
    }
    let real_hrs_and_mins = currentTime.getHours() + ":" + min.innerHTML;
    let fake_hrs_and_mins = hrs.innerHTML + ":" + min.innerHTML;
    sen2.innerHTML = fake_hrs_and_mins;
    sen3.innerHTML = per.innerHTML + "!";
    btn.onmouseup = () => {
        document.getElementById('group1').style.display = "none";
        document.getElementById('group2').style.display = "block";
        document.getElementById('group3').style.display = "none";
    }
    cancel.onmouseup = () => {
        document.getElementById('group1').style.display = "block";
        document.getElementById('group2').style.display = "none";
        document.getElementById('group3').style.display = "none";
    }
    set.onmouseup = () => {
        alert("The alarm will ring at " + alarmTime.value);
        document.getElementById('group1').style.display = "block";
        document.getElementById('group2').style.display = "none";
        document.getElementById('group3').style.display = "none";
        localStorage.setItem("alarm",alarmTime.value);
        alarmTime.value = "";
    }
    if(localStorage.alarm == fake_hrs_and_mins && currentTime.getSeconds() == 0 && per.innerHTML == "AM"){
        document.getElementById('group1').style.display = "none";
        document.getElementById('group2').style.display = "none";
        document.getElementById('group3').style.display = "block";
        localStorage.clear();
        alarmSound.play();
        alarmSound.loop = true;
    }
    if(localStorage.alarm == real_hrs_and_mins && currentTime.getSeconds() == 0 && per.innerHTML == "PM"){
        document.getElementById('group1').style.display = "none";
        document.getElementById('group2').style.display = "none";
        document.getElementById('group3').style.display = "block";
        localStorage.clear();
        alarmSound.play();
        alarmSound.loop = true;
    }
    dismiss.onmouseup = () => {
        document.getElementById('group1').style.display = "block";
        document.getElementById('group2').style.display = "none";
        document.getElementById('group3').style.display = "none";
        localStorage.clear();
        alarmSound.pause();
        alarmSound.currentTime = 0;
    }
    console.log();
})