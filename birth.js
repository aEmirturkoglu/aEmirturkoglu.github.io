// get the input element
const birthdayInput = document.getElementById("birthday-input");
// get the button element
const calculateButton = document.getElementById("calculate-button");
// get the result element
const result = document.getElementById("result");

// define a function to calculate the age
function calculate() {
  // get the value of the input element
  const birthday = birthdayInput.value;
  // check if the input is valid
  if (birthday) {
    // create a date object from the input value
    const birthdayDate = new Date(birthday);
    // use the fetch method to get the current date and time from the API
    fetch("https://worldtimeapi.org/api/ip")
      .then(response => response.json())
      .then(data => {
        // create a date object from the API data
        const currentDate = new Date(data.datetime);
        // calculate the difference in milliseconds
        const diff = currentDate - birthdayDate;
        // convert the difference to years, months, days, hours and minutes
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // display the result without milliseconds
        result.textContent = `You are ${years} years ${months} months ${days} days ${hours} hours old.`;
      })
      .catch(error => {
        // display an error message
        result.textContent = "Something went wrong.";
        result.style.color = "red";
      });
    
  } else {
    // display an error message
    result.textContent = "Please enter a valid date.";
    result.style.color = "red";
    
  }
}

// add a click event listener to the button
calculateButton.addEventListener("click", function() {
  // call the calculate function once
  calculate();
  // use the setInterval method to call the calculate function every millisecond
  setInterval(calculate,1);
});
