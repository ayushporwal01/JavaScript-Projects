let clock = document.querySelector('.clock');
let formatBtn = document.querySelector('#format-btn');

let is24HourFormat = true;

function updateClock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = '';
    
    if(!is24HourFormat) {
        ampm = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12; 
        hrs = hrs ? hrs : 12;
    }
}

