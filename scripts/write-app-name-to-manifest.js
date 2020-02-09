#!/usr/local/bin/node

const fs = require("fs");
const path = require("path");

const FILE = path.resolve("./public/manifest.json");

const PLACEHOLDER = "%REACT_APP_APP_NAME%";
const CONTENT = process.env.REACT_APP_APP_NAME || PLACEHOLDER;

const prettyPrint = json => console.log(JSON.stringify(json, null, 2));

const env = Object.keys(process.env)
  .filter(key => key.startsWith("REACT_APP_"))
  .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {});

if (env.toString() !== "{}") {
  console.log("Environment keys:");
  prettyPrint(env);
}

fs.readFile(FILE, "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(PLACEHOLDER, CONTENT);

  fs.writeFile(FILE, result, "utf8", err => {
    if (err) {
      console.log(
        "An error occured while writing 'short_name' to manifest.json"
      );
      return console.log(err);
    }

    console.log(
      `manifest.json file has been updated with { short_name: ${CONTENT} }`
    );
  });
});
