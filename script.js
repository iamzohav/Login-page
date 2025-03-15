document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting for now

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Login Successful!");
    }
});
