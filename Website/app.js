const ApiKey = "e7e48c991722b8ec2207b9be7a815102";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

const zip = document.getElementById("zip");
const feelings = document.getElementById("feelings");

// Data for Date 
let today = new.Date()
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();