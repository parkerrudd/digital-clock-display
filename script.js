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
let timesClicked = 0;  

//Adding Times
let secondsArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]; 
let secondsIndex = 55; 

let minutesArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
let minutesIndex = 59; 

let hoursArr = [12, '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11]; 
let militaryHoursArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]; 
let hoursIndex = 20; 

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let months = [
    {January: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
    {February: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]}, 
    {March: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
    {April: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}, 
    {May: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
    {June: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30]}, 
    {July: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30]}, 
    {August: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
    {September: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30]}, 
    {October: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
    {November: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30]}, 
    {December: ['01', '02', '03', '04', '05', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
] 


//INCREMENT SECONDS 
setInterval(incrementSeconds, 1000);  

function incrementSeconds() {
    seconds.innerText = secondsArr[secondsIndex++]; 
    greetingMessage.innerText = 'Good Morning'
    // amPm.innerText = 'AM'; 
        if (secondsIndex == secondsArr.length) {
            setTimeout(incrementMinutes, 1000);  
           return secondsIndex = 0;  
        }
    } 


//INCREMENT MINUTES
function incrementMinutes() {
    minutes.innerText = minutesArr[minutesIndex++]; 
        if (minutesIndex == minutesArr.length) {
            setTimeout(incrementHours, 60000); 
            return minutesIndex = 0; 
        }
}; 


//INCREMENT HOURS 
function incrementHours() {
    hours.innerText = hoursArr[hoursIndex++]; 
    if (hoursIndex == hoursArr.length) {
        // amPm.innerText = 'PM'; 
        greetingMessage.innerText = 'Good Afternoon'
        return hoursIndex = 0; 
    }
    removeAmPm(); 
}; 

function removeAmPm() {
    if (hoursIndex <= 11) {
        amPm.innerText = 'AM'; 
    } else {
        amPm.innerText = 'PM'; 
    }
}

//TOGGLE MILITARY TIME 

button.addEventListener('click', () => {
    timesClicked++; 
    if (timesClicked%2 == 0) {
        hours.innerText = militaryHoursArr[hoursIndex]; 
    } else {
        hours.innerText = hoursArr[hoursIndex]; 
    }   
})
