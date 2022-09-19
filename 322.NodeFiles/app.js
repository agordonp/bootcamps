const fs = require("fs");
const folderName = process.argv[2] || "Project";

// fs.mkdirSync("Cats", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK!!");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("Something went wrong!");
  console.log(e);
}
