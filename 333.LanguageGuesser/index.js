import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc, francAll } from "franc";
const langs = require("langs");
const colors = require("colors");

//Taking the input language
// const language = process.argv.slice(2).join(" "); Funciona tambien!
const language = process.argv[2];
const languageCode = franc(language);

//Specifying the language that was entered
if (languageCode === "und") {
  console.log(
    "SORRY WE COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red
  );
} else {
  const result = langs.where("2", languageCode);
  console.log(`Language is: ${result.name}`.green);
}
