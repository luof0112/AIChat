/**
 * @author luof
 * @date 2024/8/21 14:02
 */
import { createApp } from 'vue';
// Import the Modal component
import Modal from '../components/updateModal/index.vue';

let time = 0; // Calculation of polling times
let version = ''; // Cached version number

// Polling function
let timerFunction = async () => {
    // Stop polling when the number of tries exceeds
    if (time >= 5) {
        clearInterval(timer);
        return (timer = null);
    }

    try {
        // Fetch the version file with a timestamp to prevent cache
        let res = await fetch(`/version.txt?v=${new Date().getTime().toString()}`);
        res = await res.json();

        // Initial page load: store the first version
        if (!version) {
            version = res;
        } else if (Number(version) !== Number(res)) {
            // Show the update prompt when the version file is updated
            const app = createApp(Modal);
            const instance = app.mount(document.createElement('div'));
            document.body.appendChild(instance.$el);

            clearTimer();
        }
    } catch (err) {
        console.log(err);
        clearTimer(); // Close polling on fetch failure
    }

    time++;
};

// Detect mouse movement and reset polling counter
let moveFunction = () => {
    time = 0;
    // Reinitialize polling when the user is active
    if (!timer) {
        timer = setInterval(timerFunction, 5000);
    }
};

// Start polling and listen for mouse movements
let timer = setInterval(timerFunction, 10000);
window.addEventListener('mousemove', moveFunction);

// Completely clear polling and remove mouse event listener
let clearTimer = () => {
    clearInterval(timer);
    window.removeEventListener('mousemove', moveFunction);
    timer = null;
};

