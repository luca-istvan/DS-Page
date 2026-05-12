// script.js

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.opacity = "0.9";

    });

    button.addEventListener("mouseout", () => {

        button.style.opacity = "1";

    });

});