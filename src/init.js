import './events/loadListener.js';


// JavaScript for displaying date and time
function displayDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateTimeString = now.toLocaleString('en-US', options);
    datetimeElement.textContent = dateTimeString;
}

// Update date and time every second
setInterval(displayDateTime, 1000);

// Initial call to display date and time
displayDateTime();