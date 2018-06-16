//VALIDATION FORMS 
var firstName = document.getElementById("first_name");
var firstNameRE = /^[A-Åa-zÆØÅæøå]+$/;

var lastName = document.getElementById("last_name");
var lastNameRE = /^[A-Za-zÆØÅæøå]+$/;

var phone = document.getElementById("telephone");
var phoneRE = /^\d{2,3}[ -]?\d{2,3}[ -]?\d{2}[ -]?(\d{2})?$/;

var email = document.getElementById("email");
var emailRE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;

var profession = document.getElementById("profession");

var age = document.getElementById("age");

var textField = document.getElementById("textField");
var textFieldRE = /[\n\w\s.,:()-_]/;

function toggleErrorMessage(errorElementId, isValid) {
    var errorMessageContainer = document.getElementById(errorElementId);
    if (!isValid) {
      errorMessageContainer.style.display = "block"
    } else {
      errorMessageContainer.style.display = "none"
    }
  }

//First name validation
function validateFirstName (firstNameInput){
    var errorId = "firstNameError";
    var isValid = firstNameRE.test(firstNameInput);
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Last name validation
function validateLastName (lastNameInput){
    var errorId = "lastNameError";
    var isValid = lastNameRE.test(lastNameInput);
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Phone validation
function validatePhone (phoneInput){
    var errorId = "phoneError";
    var isValid = phoneRE.test(phoneInput);
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Email validation
function validateEmail (emailInput){
    var errorId = "emailError";
    var isValid = emailRE.test(emailInput);
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Profession validation
function checkProfession (){
    var errorId = "professionError";
    var isValid = profession.selectedIndex == 0 ? false : true; 
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Age validation
function validateAge (ageInput){
    var errorId = "ageError";
    var isValid = (ageInput >=18 && ageInput <=50) ? true : false;
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

//Textfield validation
function validateTextField (textFieldInput){
    var errorId = "textFieldError";
    var isValid = textFieldRE.test(textFieldInput);
    toggleErrorMessage(errorId, isValid);
    return isValid;
}

var submitForm = document.getElementById("submitForm");

submitForm.addEventListener( "click",function(x){
    x.preventDefault();
    //remove all previous clicks
    document.getElementsByClassName("error").innerHTML = "";    
    
    var validFn = validateFirstName(firstName.value);
    var validLn = validateLastName(lastName.value);
    var validPn = validatePhone(phone.value);
    var validEm = validateEmail(email.value);
    var validPr = checkProfession();
    var validAg = validateAge(age.value);
    var validTf = validateTextField(textField.value);

    if (validFn && validLn && validPn && validEm && validPr && validAg && validTf) {
        document.getElementById("myForm").submit();
    } else {
        console.log("something went wrong");
    }
});

