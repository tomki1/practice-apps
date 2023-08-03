const Word = require("./db.js").Word;
const mongoose = require("mongoose");

const words = [
  new Word({
    name: "farm",
    definition: "land"
  }),
  new Word({
    name: "person",
    definition: "human"
  }),
  new Word({
    name: "hi",
    definition: "greeting"
  }),
  new Word({
    name: "hi1",
    definition: "greeting1"
  }),
  new Word({
    name: "hi2",
    definition: "greeting2"
  }),
  new Word({
    name: "hi3",
    definition: "greeting3"
  }),
];

// add 20 sample data
  var sampleName = "name";
  var sampleDef = "text";
  for (var i = 0; i < 20; i++) {

    words.push(    new Word({
      name: sampleName + i,
      definition: sampleDef + i
    }));
  }


let done = 0;

// https://dev.to/ishakmohmed/the-simplest-i-genuinely-promise-way-to-seedpopulate-fake-data-in-mongodb-using-node-21cj
const seedData = async () => {
  try {
    await Word.deleteMany({});

    for (let i = 0; i < words.length; i++) {
      words[i].save(function (err, result) {
        done++;
      });
    }
  } catch (err) {
    console.error(err);
  }

  console.log("seeded Mock Data.");
};

module.exports.seedData = seedData;