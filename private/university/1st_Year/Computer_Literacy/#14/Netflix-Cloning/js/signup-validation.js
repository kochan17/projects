// LANGUAGE DROPDOWN 

let langBtn = document.getElementsByClassName('dropdown-container');
let langOption = document.getElementsByClassName('language-dropdown');

for (let g = 0; g < langBtn.length; g++) {
    langBtn[g].addEventListener('click', () => {
        if (langOption[g].style.display !== 'none') {
            langOption[g].style.display = 'none';
        } else {
            langOption[g].style.display = 'block';
        }
    })
}

// FORM VALIDATION FOR SIGNUP
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

// Fullname validation
if (fullname) {
    fullname.addEventListener('blur', () => {
        let errorFullname = document.getElementById('error-fullname');
        
        if (fullname.value.trim().length >= 2) {
            errorFullname.style.display = 'none';
            document.getElementsByClassName("form-control")[0].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[0].style.backgroundColor = "white";
            fullname.style.color = "black";
            document.getElementsByClassName("form-control")[0].style.border = "none";
        } else {
            errorFullname.style.display = 'block';
            document.getElementsByClassName("form-control")[0].style.border = "1px solid #ff9900";
            document.getElementsByClassName("form-control")[0].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[0].style.backgroundColor = "#303030";
            fullname.style.color = "#555454";
        }
    });
}

// Email validation
if (email) {
    email.addEventListener('blur', () => {
        let errorEmail = document.getElementById('error-email');
        let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
        let str = email.value;
        
        if (regex.test(str)) {
            errorEmail.style.display = 'none';
            let formControlIndex = fullname ? 1 : 0;
            document.getElementsByClassName("form-control")[formControlIndex].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[formControlIndex].style.backgroundColor = "white";
            email.style.color = "black";
            document.getElementsByClassName("form-control")[formControlIndex].style.border = "none";
        } else {
            errorEmail.style.display = 'block';
            let formControlIndex = fullname ? 1 : 0;
            document.getElementsByClassName("form-control")[formControlIndex].style.border = "1px solid #ff9900";
            document.getElementsByClassName("form-control")[formControlIndex].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[formControlIndex].style.backgroundColor = "#303030";
            email.style.color = "#555454";
        }
    });
}

// Password validation
if (password) {
    password.addEventListener('blur', () => {
        let errorPassword = document.getElementById('error-password');
        
        if (password.value.length >= 6) {
            errorPassword.style.display = 'none';
            let formControlIndex = fullname ? 2 : 1;
            document.getElementsByClassName("form-control")[formControlIndex].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[formControlIndex].style.backgroundColor = "white";
            password.style.color = "black";
            document.getElementsByClassName("form-control")[formControlIndex].style.border = "none";
        } else {
            errorPassword.style.display = 'block';
            let formControlIndex = fullname ? 2 : 1;
            document.getElementsByClassName("form-control")[formControlIndex].style.border = "1px solid #ff9900";
            document.getElementsByClassName("form-control")[formControlIndex].style.backgroundColor = "#303030";
            password.style.color = "#555454";
        }
    });
}

// Confirm password validation
if (confirmPassword) {
    confirmPassword.addEventListener('blur', () => {
        let errorConfirmPassword = document.getElementById('error-confirm-password');
        
        if (confirmPassword.value === password.value && confirmPassword.value.length >= 6) {
            errorConfirmPassword.style.display = 'none';
            document.getElementsByClassName("form-control")[3].style.boxShadow = "none";
            document.getElementsByClassName("form-control")[3].style.backgroundColor = "white";
            confirmPassword.style.color = "black";
            document.getElementsByClassName("form-control")[3].style.border = "none";
        } else {
            errorConfirmPassword.style.display = 'block';
            document.getElementsByClassName("form-control")[3].style.border = "1px solid #ff9900";
            document.getElementsByClassName("form-control")[3].style.backgroundColor = "#303030";
            confirmPassword.style.color = "#555454";
        }
    });
}

// LEARN-MORE BUTTON
let learnMoreBtn = document.getElementById('readBtn');
let learnMoreInfo = document.getElementById('read-more');

if (learnMoreBtn && learnMoreInfo) {
    learnMoreBtn.addEventListener('click', () => {
        if (learnMoreInfo.style.display !== 'none') {
            learnMoreInfo.style.display = 'none';
        } else {
            learnMoreInfo.style.display = 'block';
            learnMoreBtn.style.display = 'none';
        }
    });
} 