const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const fsPromises = fs.promises;

app.get('/', async (req, res) => {
  try {
    // Read the file using fsPromises
    const data = await fsPromises.readFile('./test.html', 'utf-8');
    // Log the request method and url
    console.log(req.method, req.url);
    // Send the data as a response
    res.send(data);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Use the environment variable for the port or a fallback value
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
