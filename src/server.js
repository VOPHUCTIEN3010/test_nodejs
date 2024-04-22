require('dotenv').config();
const express = require('express');
const path = require('path');
const app  = express();
const configViewEngine = require('./config/configView');
const webRouter = require('./routes/web');
const connection = require('./config/database');
const { log } = require('console');

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8088;

configViewEngine(app);
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.use ('/', webRouter);

app.listen(port,hostname, () => console.log(`example at  http://localhost:${port}`) )

 