require('dotenv').config()

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { router } = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/', router);

module.exports = { app };