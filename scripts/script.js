console.log("my script is linked!");

const form = document.querySelector('form')
console.log(form);

const formDiv = document.querySelector('div')
console.log(formDiv);

form.style.width = "50%"

const input = document.createElement("input");// create an <input> element
input.setAttributeNode('type="number"', 'placeholder="Enter phone number"')
input.placeHolder = 'Enter your phone number.'
formDiv.prepend(input)

const label = document.createElement("label"); // create an <label> element.
label.setAttribute("for", 'phoneNumber'); // set the type
label.textContent = ['Please enter your phone number.']
formDiv.prepend(label)


