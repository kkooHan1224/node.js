/** ch03/3.6/readFileAsync.js */
const fs = require("fs").promises;

(async () => {
  let data = await fs.readFile("./readme.txt");
  try {
    console.log(data);
    console.log(data.toString());
  } catch {
    console.error(err);
  }
})();
