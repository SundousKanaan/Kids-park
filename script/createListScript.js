// How to make list items from input field?

// 1. Get the input field and the button
const inputField = document.querySelector("label input");
const addButton = document.querySelector("label button");

// 2. Get the list element where the items will be added
const list = document.querySelector("ol");

// 3. Add an event listener to the button
addButton.addEventListener("click", addListItem);

// 5.1 create vallues array
let values = [];

// 4. Create a function to add the list item
function addListItem() {
  // 5. Get the value from the input field
  const inputValue = inputField.value;
  // 5.2 check if the value is already in the array
  if (inputValue !== "" && values.includes(inputValue) === false) {
    //  5.3 add input value to the array
    values.push(inputValue);
  }

  console.log("List items values: ", values);

  list.innerHTML = ""; // Clear the list before adding new items
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]}</li>`;
  }

  inputField.value = "";
}

// the first option is to create a list item
// // 6. Check if the input value is not in the array
// if (inputValue !== "") {
//   console.log("Input is not empty");
//   // 7. Create a new list item
//   const listItem = document.createElement("li");
//   // 8. Set the text content of the list item to the input value
//   listItem.textContent = inputValue;
//   // 9. Append the list item to the list
//   list.appendChild(listItem);
//   // 10. Clear the input field
//   inputField.value = "";
// } else {
//   // 11. Alert the user that the input is empty
//   // (optional step) 11. If the input is empty, alert the user
//   console.log("Please enter a value before adding to the list.");
// }
