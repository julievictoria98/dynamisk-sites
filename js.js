
fetch("https://kea-alt-del.dk/t7/api/products")
.then(res =>res.json()).then(data=>showProducts(data))

function showProducts(products){

    products.forEach(showProduct);

}

function showProduct(product){
    console.log("product")
    const template = document.querySelector("#productlist_template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".productname").textContent = product.productdisplayname;

    document.querySelector("main").appendChild(clone);

}

/* [{"id":1163,
"gender":"Men",
"category":"Apparel",
"subcategory":"Topwear",
"articletype":"Tshirts",
"season":"Summer",
"productionyear":2011,
"usagetype":"Sports",
"productdisplayname":"Sahara Team India Fanwear Round Neck Jersey",
"price":895,
"discount":null,
"brandname":"Nike","
soldout":0} */











/*Soldout funtion */

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