const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Log the actual request URL and method
  console.log(req.url, req.method);

  // Set the response header (must be inside the request handler)
  res.setHeader("Content-Type", "text/html");

  // Read the HTML file and send it as the response
  fs.readFile("./assets/index.html", (err, data) => {
    if (err) {
      console.error(err);
      // Send a 500 error response if the file can't be read
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      // Send the file content
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
