const search = require("./search");

const main = () => {
  const [, , ...args] = process.argv;
  console.log(args);
  if (args[0]) {
    // console.log("Ciao!");
    search(args[0]);
  }
  //  console.log(process.argv);
};
main();
module.exports = main;
