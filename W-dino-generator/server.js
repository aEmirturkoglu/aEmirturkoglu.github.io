// Require the node-fetch package
const fetch = require("node-fetch");

// The rest of your code is the same
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Define a route for the home page
app.get("/", async (req, res) => {
  // Create a variable to store the URL
  let url = "https://dinoipsum.com/api/?format=html&paragraphs=1&words=2";

  // Use the fetch method to get the data from the URL
  await fetch(url)
    // Convert the response to text
    .then((response) => response.text())
    // Display the data in the console
    .then((data) => console.log(data))
    // Catch any errors
    .catch((error) => console.error(error));

  // Send a response to the client
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`server runnin on port ${PORT}`);
});
