require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");


const app = express();
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

// routes
app.post('/checkout', (req, res) => {


  db.query('INSERT into responses (name, email, password, address, phone_number, card_number, card_expiary_date, card_cvv, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.name, req.body.email, req.body.password, req.body.address, req.body.phone_number, req.body.card_number, req.body.card_expiary_date, req.body.card_cvv, req.body.zipcode], (error, rows) => {
    if (error) {
      res.sendStatus(500);
    } else {
    res.status(201).send(rows);
    }
  })


});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
