const fs = require("fs");

// reading files
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
// writiing files
fs.writeFile("./docs/blog.txt", "hello piaf", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("new file created");
});
// directories
fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder created successfully");
  }
});
// deleting files
if (fs.existsSync("./assets/deleteme.txt")) {
  fs.unlink("./assets/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
