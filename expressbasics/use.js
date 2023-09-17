const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const fsPromises = fs.promises;

app.get('/', async (req, res) => {
  try {
    const data = await fsPromises.readFile('./test.html', 'utf-8');
    console.log(req.method, req.url);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
 