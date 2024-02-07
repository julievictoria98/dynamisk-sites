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


    if(product.discount){
      document.querySelector(".price").textContent = Math.round(product.price * product.discount) / 100 + " kr";
      document.querySelector(".price").style.color = 'red';
    }
    
if (product.category === "Accessories" || product.category === "Sporting Goods") {
    // Remove the <label> element
    document.querySelector("label").remove();
    document.querySelector("#pick_size").remove();


}
}



