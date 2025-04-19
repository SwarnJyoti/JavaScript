const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number (a): ", (a) => {
  const num = parseInt(a);
  const result = [];
  const max = num % 2 === 0 ? 2 * num - 3 : 2 * num - 1;

  for (let i = 1; i <= max; i += 2) {
    result.push(i);
  }

  console.log(`Output: ${result.join(", ")}`);
  rl.close();
});
