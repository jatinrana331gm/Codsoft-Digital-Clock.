document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    function updateClockAndDate() {
        const now = new Date();

    // get minutes,seconds,hours
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12 || 12;
        hours = String(hours).padStart(2, '0');

        // Get current day and date
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayOfWeek = days[now.getDay()];  
        const day = now.getDate(); 
        const month = months[now.getMonth()];  
        const year = now.getFullYear(); 

        // Format the date
        const formattedDate = `${day} ${month} ${year}`;

        // Update the clock element
        clock.innerHTML = `<span id="hours">${hours}</span> : <span id="minutes">${minutes}</span> : <span id="seconds">${seconds}</span> <span id="ampm">${ampm}</span>`;

        // Update the date element with the correct day and formatted date
        dateElement.innerHTML = `<div class="day">${dayOfWeek}</div><div class="full-date">${formattedDate}</div>`;
    }

    setInterval(updateClockAndDate, 1000);

    updateClockAndDate();
});


