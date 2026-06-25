const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// Handle errors
readStream.on("error", (err) => {
  console.log("Error reading file:", err.message);
});

writeStream.on("error", (err) => {
  console.log("Error writing file:", err.message);
});

readStream.on("data", (chunk) => {
  console.log("_ _ _ _ _ _NEW CHUNK_ _ _ _ _ ");
  console.log(chunk);

  // Write a header before each chunk
  writeStream.write("\nNEW CHUNK\n"); // ✅ Fixed
  writeStream.write(chunk);
});

// PIPING method

const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// This handles everything automatically!
readStream.pipe(writeStream);

readStream.on("error", (err) => console.log("Read error:", err.message));
writeStream.on("error", (err) => console.log("Write error:", err.message));
readStream.on("end", () => console.log("File copied successfully!"));
