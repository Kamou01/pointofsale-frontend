function registerUser() {
    fetch("https://pointof-sale2.herokuapp.com/user-registration/")
    .then(response => response.json())
    .then(data => 