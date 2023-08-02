require("dotenv").config();
const express = require("express");
const path = require("path");
const {db, addWord, getAll, updateDefinition} = require("./db.js");


const app = express();

app.use(express.json());
// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));



// routes

app.get('/words', (req, res) => {
  getAll()
    .then((data) => {res.send(data)});
})

app.post('/words', (req, res) => {
  // db.addWord(req.body.word, req.body.definition);
  addWord("nIHaos", "mandarin greetingg");
  res.send('post request to /words')

})

app.put('/words', (req, res) => {
  updateDefinition("nihaos", "coolr greeting");
  res.send('put request to /words')
})


app.delete('/words', (req, res) => {
  res.send('delete request to /words');
})



app.all('/*', (req, res) => {
  res.send('hello world')
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
