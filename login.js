function loginUser() {
    fetch("https://pointof-sale2.herokuapp.com/user_login/")
    .then(response => response.json())
    .then(data =>