console.log("my script is linked!");

const form = document.querySelector("form");
console.log(form); // getting the whole form idk why i havent used it
form.style.width = "50%";

const formDiv = document.getElementById("contact");
console.log(formDiv); // getting the next step in of my form also idk why i havent used it

const emergency = document.querySelector(".white");
console.log(emergency); //

const input = document.createElement("input"); // create an <input> element
input.setAttribute("type", "tel");
input.setAttribute("placeHolder", "Enter you phone number");
input.setAttribute("required", "true");
input.setAttribute("minlength", "10");
input.setAttribute("maxlength", "10");
// input.setAttribute("pattern", "[^/^d+$/]");

// input.setAttribute("requiered"); cant set attribute as required
formDiv.prepend(input);

input.addEventListener("input", function (e) {
  if (!/^\d+$/.test(input.value)) {
    this.setCustomValidity("Enter only numbers for your phone number");
    return false;
  }
  if (this.value.length < this.minLength) {
    this.setCustomValidity("Enter the correct length phone number");
    return false;
  }
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength); // Truncate if longer than max
    return false;
  }
  if (this.value === 10) {
    this.validity = valid;
    console.log(this.validity);
    return true;
  }
});

const label = document.createElement("label"); // create a <label> element.
label.setAttribute("for", "phoneNumber"); // set the type
label.textContent = ["Please enter your phone number."];
formDiv.prepend(label);

// const userInput = input();
// console.log(userInput);

emergency.addEventListener("click", () => {
  console.log(emergency.classList.toggle("white"));
});

input.addEventListener("onKeyDown", (evt) => {
  evt.preventDefault();
  if (input.value !== "/^d+$/") {
    // evt.preventDefault();
    this.setCustomValidity("Enter only numbers for your phone number");
    return false;
  } else if (this.value.length > this.maxLength) {
    // evt.preventDefault();
    this.value = this.value.slice(0, this.maxLength);
    // this.value.setCustomValidity(" ");
  }
  return {
    phone: "input.value",
  };
});

// function textAreaCharacterCount(evt){
//   evt.preventDefault();
//   if (){

//   }
// }

// const inputName = document.createElement("input"); // create an <input> element.
// inputName.setAttribute("type", "text");// set the type
// inputName.setAttribute("placeHolder", "Enter name"); // add additional attributes
// formDiv.prepend(inputName); // push it into the form
