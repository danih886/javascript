document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const message = document.getElementById('message');
    
    if (username === "Headmaster" && password === "thelol") {
        message.textContent = "Login successfull";
    } else {
        message.textContent = "Invalid username or password";
    }
});