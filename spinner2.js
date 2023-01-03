//Spinner 2 Refactored!

const spinnerArr = ["|", "/", "-", "\\", "|"];

let delay = 100;
const increment = 200;

for (let i = 0; i < 2; i++) {
  for (let spin of spinnerArr) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}    `);
    }, delay);
    delay += increment;
  }
}
