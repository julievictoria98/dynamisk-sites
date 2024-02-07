const urlParams= new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then(res =>res.json()).then(data=>showProduct(data));


function showProduct(product) {
  console.log(product);  
  document.querySelector(".brand-name").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price + " kr";
  document.querySelector(".brand-name span").textContent = product.brandname;
  document.querySelector(".id span").textContent = product.id;
  document.querySelector(".gender span").textContent = product.gender;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`



}



