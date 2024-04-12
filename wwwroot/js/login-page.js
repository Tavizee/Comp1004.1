
// JavaScript functions
function login(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simulate login validation
    if (username === 'admin' && password === 'password') {
        // Redirect to password manager page
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('passwordManagerSection').style.display = 'block';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function signup(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Perform registration process (you can replace this with your actual registration logic)
    console.log('Registration Details:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Optionally, you can redirect the user to the login page after successful registration
    window.location.href = 'login.html';
}
