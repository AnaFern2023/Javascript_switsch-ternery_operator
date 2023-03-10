console.log("Yes");

let password = document.getElementById("inputPassword");


function checkPW() {

    password.value.length >= 8 ? result.innerHTML = "<p style='color: green;'>Welcome to your account</p>" : result.innerHTML = "<p style= 'color: red';>Your Password is too short</p>";
};
