// Collect input from a user
let maxNumber = prompt('Choose any number.');

// Convert the input to a number
maxNumber = +maxNumber;

if (maxNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

  // Create a message displaying the random number in <main> element
  document.querySelector('main').innerHTML = `<p>${randomNumber} is a random number between 1 and ${maxNumber}.</p>`;
} else {
  document.querySelector('main').innerHTML = '<p>Please add a number.</p>';
}