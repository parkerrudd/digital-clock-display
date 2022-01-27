const greetingMessage = document.getElementById('header'); 
const hours = document.getElementById('hours'); 
const minutes = document.getElementById('minutes'); 
const seconds = document.getElementById('seconds'); 
const amPm = document.getElementById('am-pm'); 
const weekday = document.getElementById('weekday'); 
const month = document.getElementById('month'); 
const day = document.getElementById('day'); 
const year = document.getElementById('year'); 
const button = document.getElementById('btn'); 

let secondsArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]; 
let secondsIndex = 0; 

setInterval(incrementSeconds, 1000);  

function incrementSeconds() {
    seconds.innerText = secondsArr[secondsIndex++]; 
        if (secondsIndex == 60) {
           return secondsIndex = 0; 
        }

}

