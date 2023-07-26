// get the input elements
const birthdayInput = document.getElementById("birthday-input");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input"); // added a new input element for the minute part
// get the button element
const calculateButton = document.getElementById("calculate-button");
// get the result element
const result = document.getElementById("result");

// define a function to calculate the age
function calculate() {
  // get the value of the input elements
  const birthday = birthdayInput.value;
  const hour = hourInput.value;
  const minute = minuteInput.value; // added a new variable for the minute value
  // check if the inputs are valid
  if (birthday && hour && minute) {
    // split the birthday string by "-" and get the year, month, and day values
    const birthdayParts = birthday.split("-");
    const year = parseInt(birthdayParts[0]);
    const month = parseInt(birthdayParts[1]) - 1; // subtract 1 because months are zero-based
    const day = parseInt(birthdayParts[2]);
    // parse the hour and minute values as numbers
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute); // added a new variable for the minute number
    // create a date object from the input values
    const birthdayDate = new Date(year, month, day, hourNum, minuteNum); // added the minute part to the date object
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
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // added a new variable for the minutes part
        // display the result without milliseconds
        result.textContent = `You are ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes old.`; // added the minutes part to the result text
      })
      .catch(error => {
        // display an error message
        result.textContent = "Something went wrong.";
        result.style.color = "red";
      });
  } else {
    // display an error message
    result.textContent = "Please enter a valid date, hour and minute.";
    result.style.color = "red";
  }
}
calculateButton.addEventListener("click", function() {
  calculate();
});
