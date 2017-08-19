#!/usr/bin/env node
"use strict";
const licenseCheck = require("./src");
const args = process.argv.slice(2);
licenseCheck(args)
  .then(code => {
    process.exit(code);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
