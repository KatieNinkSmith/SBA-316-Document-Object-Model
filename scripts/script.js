console.log("my script is linked!");

const form = document.querySelector("form");
console.log(form);

const formDiv = document.getElementById("contact");
console.log(formDiv);

form.style.width = "50%";

const input = document.createElement("input"); // create an <input> element
input.addEventListener("input", validateInput);

function validateInput(evt) {
  evt.preventDefault();
  if (input.value.length <= 0) {
    this.setCustomValidity("Please enter phone number");
    input.focus();
    return false;
  }
  if (input.value !== "/^d+$/") {
    this.setCustomValidity("Enter only numbers for your phone number");
    return false;
  }
  if (input.value.length > 10 || input.value.length < 10) {
    this.setCustomValidity("Please enter a corret phone number length");
    return false;
  }
  if (input.value.length === 10) {
    this.setCustomValidity("");
    return true;
  }
}
input.setAttribute("type", "numbers");
input.setAttribute("placeHolder", "Enter you phone number");
// input.setAttribute("requiered"); cant set attribute as required
formDiv.prepend(input);

const label = document.createElement("label"); // create a <label> element.
label.setAttribute("for", "phoneNumber"); // set the type
label.textContent = ["Please enter your phone number."];
formDiv.prepend(label);

// const inputName = document.createElement("input"); // create an <input> element.
// inputName.setAttribute("type", "text");// set the type
// inputName.setAttribute("placeHolder", "Enter name"); // add additional attributes
// formDiv.prepend(inputName); // push it into the form
