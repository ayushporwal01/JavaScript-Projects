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
        //Convert to 12-hour format
        ampm = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12; 
        hrs = hrs ? hrs : 12;
    }

    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let timeString = `${hrs}:${mins}:${secs} ${ampm}`;

    //Display the time
    clock.textContent = timeString;

    // Toggle format on button click
    formatBtn.addEventListener((e) => {
        
    })

    setInterval(updateClock, 1000);

    //Initialize clock
    updateClock();

}

