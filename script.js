function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let regex = /^pet_[a-zA-Z0-9]+$/; // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  if (regex.test(input)) {
    result = "Valid Syntax ✅";
  } else {
    result = "Invalid Syntax ❌";
  }
  document.getElementById("result").innerText = result;
}
