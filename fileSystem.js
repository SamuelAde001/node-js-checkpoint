const fs = require("fs");

fs.writeFileSync("welcome.txt", "Hello Node");

fs.writeFileSync("hello.txt", "Hello world again");

try {
  const data = fs.readFileSync("hello.txt", "utf-8");

  console.log(data);
} catch (err) {
  console.log("here is your error:", err.message);
}
