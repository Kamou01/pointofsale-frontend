function deleteProduct(id) {
    fetch(`https://pointof-sale2.herokuapp.com/delete_product/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderProducts();
    })

}

