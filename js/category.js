fetch("https://kea-alt-del.dk/t7/api/categories")
.then(res =>res.json()).then(data=>showCats(data))

function showCats(cats){

cats.forEach(showCat);


}

function showCat(cat){
    console.log("cat")

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    
    clone.querySelector("h2").textContent = cat.category
    clone.querySelector("a").href = `productlist.html?category=${cat.category} `
    document.querySelector("article").appendChild(clone);

   

}
