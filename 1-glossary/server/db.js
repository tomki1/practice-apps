const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
});

const glossarySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  definition: String
});

const Word = mongoose.model('word', glossarySchema);

// get all words from glosssary
var getAll = () => {
  return Word.find({});
}

// add word to glossary
var addWord = async (newWord, newDef) => {
  // if duplicate word (case insensitive), return
  const arr = await Word.find({name: { '$regex': newWord, $options: 'i' }});
  console.log(arr);
  if (arr.length !== 0) {
    console.log("duplicate name");
    return;
  }
  // create new document
  Word.create({name: newWord, definition: newDef});
  console.log("word inserted");
}

// update definition of word in glossary
var updateDefinition = (word, newDef) => {
  Word.findOneAndUpdate({name: {'$regex': word, $options: 'i'}}, {definition: newDef}, function (error, doc) {
    if (error) {
      console.log("error updating");
      return;
    }
    console.log(doc);

  });
}

// delete word from glossary
var deleteWord = (word) => {
  Word.findOneAndDelete({name: {'$regex': word, $options: 'i'}}, function (error, doc) {
    if (error) {
      console.log("error deleting");
      return;
    }
    console.log("deleted", doc);
  });
}

module.exports.db = db;
module.exports.addWord = addWord;
module.exports.getAll = getAll;
module.exports.updateDefinition = updateDefinition;
module.exports.deleteWord = deleteWord;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
