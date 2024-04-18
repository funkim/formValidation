import { style } from "./style.css"




function validateEmail() {
    const email = document.getElementById("email");
    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Should be an Email!");
        } else {
            email.setCustomValidity(""); 
        }
    });
}

function validateZip() {
    const zipCode = document.getElementById("zip");
    zipCode.addEventListener("input", () => {
        const pattern = /^[0-9]{5}$/;
        if (!pattern.test(zipCode.value)) {
            zipCode.setCustomValidity("Invalid ZIP Code. Should be 5 digits.");
        } else {
            zipCode.setCustomValidity("");
        }
    });
}

function validatePassword() {
    const confirmPassword = document.getElementById("confirmPassword");
    const password = document.getElementById("password");
    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords Do Not Match");
        } else {
            confirmPassword.setCustomValidity("");
        }
    });
}

validateEmail();
validatePassword();
validateZip();