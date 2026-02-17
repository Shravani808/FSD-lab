// SIGN UP VALIDATION
function validateSignup() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value.trim();

    // Name validation
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    // Email format validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        alert("Email must not be empty");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Password must not be empty");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Mobile validation
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    alert("Signup successful!");
    return true;
}


// SIGN IN VALIDATION
function validateSignin() {

    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        alert("Email must not be empty");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Enter valid email");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Password must not be empty");
        return false;
    }

    alert("Login successful!");
    return true;
}
