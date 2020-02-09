#!/usr/local/bin/node

const fs = require("fs");
const path = require("path");
const { version } = require("../package.json");

const FILE = path.resolve("./public/meta.json");
const JSON_CONTENT = JSON.stringify({ version });

fs.writeFile(FILE, JSON_CONTENT, "utf8", err => {
  if (err) {
    console.log("An error occured while writing JSON Object to meta.json");
    return console.log(err);
  }

  console.log(
    `meta.json file has been saved with latest version number: ${JSON_CONTENT}`
  );
});
