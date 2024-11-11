console.log("my script is linked!");

const form = document.querySelector("form");
console.log(form);
form.style.width = "50%";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.flexWrap = "nowrap"; // getting the whole form to set a width
// const list = document.querySelector(".list");
// console.log(list);
// list.style.width = "50%";

const formDiv = document.getElementById("contact");
console.log(formDiv); // getting the form to push new elements into
const email = document.getElementById("userEmail");
console.log(email); // getting the email to pull email.value for storage
const message = document.getElementById("userMessage");
console.log(message); // getting the message to pull message.value for storage

// const emergency = document.querySelector(".emergency");
// console.log(emergency); // emergency input so add event to the click
const send = document.querySelector(".send");
console.log(send);

// emergency.addEventListener("submit", toggleSubmit);

const phone = document.createElement("input"); // create an <phone> element
console.log(phone);
phone.setAttribute("id", "userPhone");
phone.setAttribute("type", "tel"); // set type
phone.setAttribute("required", "true"); // make required
// phone.setAttribute("pattern", "!/^d+$/");
phone.setAttribute("placeHolder", "Enter your phone number"); // create placeholder
phone.setAttribute("minlength", "10"); // set min length
phone.setAttribute("maxlength", "10"); // set max length
formDiv.prepend(phone); // push it into the form

const br = document.createElement("br");
formDiv.prepend(br);
// const label = document.createElement("label"); // create a <label> element.
// label.setAttribute("for", "phoneNumber"); // set the type
// // label.textContent = ["Please enter your phone number."];
// formDiv.prepend(label); // push it into the form

const userName = document.createElement("input"); // create an <input> for a name
userName.setAttribute("id", "userName");
userName.setAttribute("type", "text"); // set the type
userName.setAttribute("required", "true"); // set to required
userName.setAttribute("placeHolder", "Enter your name"); // set the place holder
formDiv.prepend(userName); // push into the form

formDiv.addEventListener("click", function (evt) {
  formDiv.preventDefault();
  checkInputs();
  return true;
});
// phone.addEventListener("input", phoneInput);
// add event listener to the input that validates the phone number entered
function checkInputs(evt) {
  if (!/^\d+$/.test(phone.value)) {
    phone.setCustomValidity("Enter only numbers for your phone number");
    return false;
  } // must be numbers
  if (phone.value.length < phone.minLength) {
    phone.setCustomValidity("Enter the correct length phone number");
    return false;
  } // makes sure it is the length of a phone number
  if (phone.value.length > phone.maxLength) {
    phone.value = phone.value.slice(0, phone.maxLength);
    return false;
  } // does not allow input to be longer than max
  phone.setCustomValidity(" ");
  return true; // removes message
}

formDiv.addEventListener("click", function thanks(evt) {
  send.setTimeout(() => {
    send.classlist.toggle("thankYou");
  }, 5000);
});
// function toggleSubmit(evt) {
//   // evt.preventdefault();
//   // event toggles emergency button to red and does a pop up alert to confirm if your message is an emergency
//   emergency.classList.toggle(
//     "red"
//     // alert(
//     //   "If you would like to Submit this as an emergency it will be moved to the top of the que"
//     // )
//   );
//   //event is also supposed to save input data to push into a list
//   // return {
//   //   Name: userName.input,
//   //   Phone: phone.input,
//   //   Email: email.input,
//   //   Message: message.input,
//   //   // confirm("We will get back to you ASAP!")
//   // };
// }
// send.addEventListener("submit", sendMessage);
function sendMessage(evt) {
  evt.preventdefault();
  // add event to the send input
  return {
    Name: userName.input,
    Phone: phone.input,
    Email: email.input,
    Message: message.input,
    // confirm("We will get back to you within 3 business days")
  };
} // supposed to return the input for storage
