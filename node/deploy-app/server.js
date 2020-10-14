const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Read the host address and the port from the environment
const hostname = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})