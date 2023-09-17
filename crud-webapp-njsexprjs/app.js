const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler')

const app = express()

const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use("/api/contacts", require('./routes/contactRoutes'))//bunu farklı nasıl kullanırım

app.use(errorHandler)




app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})
