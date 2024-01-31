"use strict"

window.addEventListener('load', main);

function main() {
    applyGrayScale();
    setEventListeners();
}

function applyGrayScale() {
    const soldOutDivs = document.querySelectorAll('.grid1-1-1 .sold-out');

    soldOutDivs.forEach(soldOutDiv => {
        const image = soldOutDiv.querySelector('img');

        if (image) {
            image.style.filter = 'grayscale(100%)';
        }
    });
}

function setEventListeners() {
    document.querySelectorAll(".btn").forEach(function(element) {
        element.addEventListener("click", function() {
            redirect(element.firstElementChild.href);
        });
    })
}

function redirect(url) {
    window.location = url;
}