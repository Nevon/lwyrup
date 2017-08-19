const licenses = require(".");

module.exports = class License {
  constructor(name, description, compatibleWith) {
    this.name = name;
    this.description = description;
    this.compatibleWith = compatibleWith || [];
  }

  getCompleteCompatibleWith() {
    return [this, ...this.compatibleWith];
  }
};
