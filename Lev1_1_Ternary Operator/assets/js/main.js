console.log("Yes");

let age = document.getElementById("inputNumber");

function checkAge() {
    age.value >= 18 ? result.innerHTML = ("Volljährig") : result.innerHTML = ("Minderjährig");
};
