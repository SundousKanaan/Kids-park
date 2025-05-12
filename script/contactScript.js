// how to get the contact form data

// 1. get the form elements
const form = document.querySelector("form");
const firstName = document.querySelector("#contactPage #firstName");
const lasttName = document.querySelector("#contactPage #lastName");
const email = document.querySelector("#contactPage #email");

// for radio buttons we can get the checked value
const topic = document.querySelector(
  "#contactPage input[name='topic']:checked"
);

// for select elements we can get the selected value
const select = document.querySelector("#contactPage select");

const message = document.querySelector("#contactPage #message");

// 2. get the submit button
const submitButton = document.querySelector("#contactPage form > button");

// 3. add event listener to the submit button
submitButton.addEventListener("click", getFormData);

// 4. create a function to get the form data
function getFormData(event) {
  console.log("Form submitted");
  event.preventDefault(); // prevent the form from submitting

  // 5. check if the form is valid
  if (form.checkValidity()) {
    // 6. get the form values
    const formData = {
      firstName: firstName.value,
      lastName: lasttName.value,
      email: email.value,
      topic: topic.value,
      select: select.value,
      message: message.value,
    };
    console.log("formData:", formData);
    // 7. send the form data to the server
    // for now we will just log it to the console
    // in the real world we will send it to the server using fetch or axios
  } else {
    console.log("Form is not valid");
    form.reportValidity(); // show the validation errors
  }
}
