// importing my own library
import {jd} from "./mijnBibliotheek.js";

// immediatly invoked function expression
(() => {
    const hamburger = jd.getID("hamburger-button");
    const navLinks = jd.getID("nav-links");
    const closeButton = jd.getID("close-button");

    // eventlistener for the hamburger icon
    hamburger.addEventListener('click', () => {
        jd.show(navLinks); // show the navlinks
        navLinks.classList.toggle('active'); // toggle the display styling of the navlinks
    });

    closeButton.addEventListener('click', () => {
        jd.hide(navLinks); // hide the navlinks
    });

    // function that shows a message depending on the time of day
    const greeting = jd.getID("greeting");

    function showGreeting() {
        let date = new Date(); // define a new date object use the date class
        let hour = date.getHours(); // get the hours with the getHours() method

        // if else if else if else statement that shows a message depending on the time of day
        if( hour >= 18 ) {
            greeting.innerText = "Goodevening";
        } else if ( hour >= 12 ) {
            greeting.innerText = "Hi! Welcome";
        } else if ( hour >= 6 ) {
            greeting.innerText = "Goodmorning";
        } else {
            greeting.innerText = "It's very late! You should be asleep. But...";
        }
    }

    // only invoke the function if the greeting element is present
    if (greeting !== null) {
        showGreeting();
    }
})();