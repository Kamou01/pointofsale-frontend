function getProducts() {
    fetch("https://pointof-sale2.herokuapp.com/view_products/")
    .then(response => response.json())
    .then(data => {
     console.log(data.products)
        let products_list = [];
        let products = data.products;
        let products_container = document.querySelector(".products-container");

        // SAVE INCOMMING products TO LOCALSTORAGE TO MINIMIZE API CALLS
        localStorage.setItem("products", JSON.stringify(products_list));

        //  CLEAR THE CONTENTS OF THE products_container BEFORE POPULATING IT
        products_container.innerHTML = " ";

        // LOOP THROUGH THE products AND CREATE A PRODUCT CARD FOR EACH PRODUCT AND WRITE IT TO THE products_container
        products.forEach(product => {
            products_container.innerHTML += renderProducts(product);
        });
    });
}

function renderProducts(product) {
    console.log(product);
    return `
    <h1>${product.name}</h1>
    <h1>${product.price}</h1>
    <h1>${product.description}</h1>
    <h1>${product.category}</h1>
    <h1>${product.image}</h1>
    <button onclick="deleteProduct(${product.id})">delete</button>
    `
}

getProducts()

function deleteProduct(id) {
    fetch(`https://pointof-sale2.herokuapp.com/delete_product/${id}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderProducts();
    })

}
