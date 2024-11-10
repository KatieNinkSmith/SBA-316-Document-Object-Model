console.log("my script is linked!");

const form = document.querySelector("form");
console.log(form); // getting the whole form idk why i havent used it
form.style.width = "50%";

const formDiv = document.getElementById("contact");
console.log(formDiv); // getting the form to push new elements into
const email = document.getElementById("userEmail");
console.log(email);
const message = document.getElementById("userMessage");
console.log(message);

const emergency = document.querySelector(".emergency");
console.log(emergency); //

emergency.addEventListener("submit", function (evt) {
  emergency.classList.toggle(
    "red"
    // alert(
    //   "If you would like to Submit this as an emergency it will be moved to the top of the que"
    // )
  );
  // return {
  //   Name: userName.input,
  //   Phone: phone.input,
  //   Email: email.input,
  //   Message: message.input,
  //   // confirm("We will get back to you ASAP!")
  // };
});

const phone = document.createElement("input"); // create an <phone> element
console.log(phone);
phone.setAttribute("type", "tel"); // set type
phone.setAttribute("placeHolder", "Enter your phone number"); // create placeholder
phone.setAttribute("required", "true"); // make required
phone.setAttribute("minlength", "10"); // set min length
phone.setAttribute("maxlength", "10"); // set max length
formDiv.prepend(phone); // push it into the form

const label = document.createElement("label"); // create a <label> element.
label.setAttribute("for", "phoneNumber"); // set the type
// label.textContent = ["Please enter your phone number."];
formDiv.prepend(label);

const userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("required", "true0");
userName.setAttribute("placeHolder", "Enter your name");
formDiv.prepend(userName);
// const userphone = phone();
// console.log(userphone);

phone.addEventListener("input", function (evt) {
  if (!/^\d+$/.test(phone.value)) {
    this.setCustomValidity("Enter only numbers for your phone number");
    return false;
  }
  if (this.value.length < this.minLength) {
    this.setCustomValidity("Enter the correct length phone number");
    return false;
  }
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength); // does not allow phone if longer than max
    return false;
  }
  this.setCustomValidity(" ");
  return true;
});

// btn.addEventListener("click", function () {
//   btn.forEach(() => {
//     const li = document.createElement("li");
//     const input = document.querySelector("input");
//     console.log(input.value);
//     if (input.value.trim() == "") return;
//     li.textContent = input.value;
//     document.querySelector("ul").appendChild(li);
//     input.value = "";
//   });
// });
// btn.addEventListener("click", handleBtnClick);

// function handleBtnClick(evt) {
//   const li = document.createElement("li");
//   const input = document.querySelector("input");
//   console.log(input.value);
//   if (input.value.trim() == "") return;
//   li.textContent = input.value;
//   document.querySelector("ul").appendChild(li);
//   input.value = "";
// }
// function textAreaCharacterCount(evt){
//   evt.preventDefault();
//   if (){

//   }
// }

// const inputName = document.createElement("input"); // create an <input> element.
// inputName.setAttribute("type", "text");// set the type
// inputName.setAttribute("placeHolder", "Enter name"); // add additional attributes
// formDiv.prepend(inputName); // push it into the form
