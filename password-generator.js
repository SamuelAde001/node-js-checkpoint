const passwordGenerator = require("generate-password");

const password = passwordGenerator.generate({
  length: 12,
  numbers: true,
  symbols: true,
});

console.log(password);
