const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const numberInput =document.getElementById("number-input")
let inputs = [];

// Retrieve data from localStorage when the page loads
window.addEventListener("load", () => {
  const storedInputs = localStorage.getItem("inputs");
  if (storedInputs) {
    inputs = JSON.parse(storedInputs);
  }
});

let isValidEmail = (email) => {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  return regex.test(email.toLowerCase());
};

let addInputs = () => {
  let newName = nameInput.value.trim();
  let newEmail = emailInput.value.trim();
  let newPassword = passwordInput.value.trim();
let newnumber=numberInput.value.trim();
  // Validate inputs before pushing to the array
  if (newName === "" || newEmail === "" ||newnumber =="" || newPassword === "") {
    alert("Please enter the required fields");
    return;
  }
  if (!isValidEmail(newEmail)) {
    alert("Please enter a valid email");
    return;
  }

  // If all validations pass, proceed
  const data = {
    id: Date.now(),
    name: newName,
    email: newEmail,
    password: newPassword,
    number: newnumber,
  };

  inputs.push(data);

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  numberInput.value="";

  console.log("Inputs array:", inputs); // Log the inputs array for debugging

  localStorage.setItem("inputs", JSON.stringify(inputs));

  alert("Data added successfully!"); // Add this alert to check if data is being added

  let user_records = JSON.parse(localStorage.getItem("inputs")) || [];
  let current_user = user_records.find(
    (v) => v.email === newEmail && v.password === newPassword
  );

  if (current_user) {
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    localStorage.setItem("number", current_user.number);
    localStorage.setItem("id", current_user.id);
    window.location.href = "login.html";
  } else {
    alert("Login failed");
  }
};



// const signInButton = document.getElementById("signin-btn");
// signInButton.addEventListener("click", addInputs);
