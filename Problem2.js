const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number (a): ", (a) => {
  const num = parseInt(a);
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(2 * i + 1); 
  }

  console.log(`Output: ${result.join(", ")}`);
  rl.close();
});
