function updateProducts() {
    fetch("https://pointof-sale2.herokuapp.com/view_products/")
    .then(response => response.json())
    .then(data =>