// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;

// Use middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const comments = [
  {
    id: 1,