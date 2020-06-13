const fs = require("fs");
module.exports = {
  async read(path) {
    return fs.readFileSync(path).toString();
  },
};
