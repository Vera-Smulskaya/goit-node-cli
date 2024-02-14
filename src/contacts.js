const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log("Before");

fs.readFile("read.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log("After");

fs.readFile("read.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
