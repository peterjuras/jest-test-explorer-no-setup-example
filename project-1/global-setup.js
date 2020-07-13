const fs = require("fs");

module.exports = () => {
  fs.writeFileSync(
    "project-1-setup.txt",
    `Setup has been run last at ${new Date()}\n`
  );
};
