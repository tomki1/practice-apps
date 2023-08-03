require("dotenv").config();
const express = require("express");
const path = require("path");
const {db, addWord, getAll, updateDefinition, deleteWord} = require("./db.js");
const {seedData} = require("./seedScript.js");


const app = express();

app.use(express.json());

// generate sample data
seedData();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));



// routes

app.get('/words', (req, res) => {
  getAll()
    .then((data) => {res.send(data)});
})

app.post('/words', (req, res) => {
  // db.addWord(req.body.word, req.body.definition);
  addWord("yo", "eng greetingg");
  res.status(201).send('word added')

})

app.put('/words', (req, res) => {
  updateDefinition("nihaos", "coolr greeting");
  res.status(200).send('definition updated')
})


app.delete('/words', (req, res) => {
  deleteWord(req.body.id);
  res.status(200).send('word deleted');
})



app.all('/*', (req, res) => {
  res.send('hello world')
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
