const nlf = require("nlf");
const correct = require("spdx-correct");
const parse = require("spdx-expression-parse");
const commonAncestor = require("./common-ancestor");
const licenses = require("./licenses");

const findCompatible = (license, done) => {
  // console.log(
  //   `Finding compatible licenses of ${license.name}:\n${license.compatibleWith
  //     .map(c => c.name)
  //     .join("\n")}`
  // );
  done(null, license.getCompleteCompatibleWith());
};

// commonAncestor([licenses.MIT, licenses.Apache2], findCompatible, (err, res) =>
//   console.log(err, res)
// );

const notDual = ({ license }) => !!license;
const pick = key => obj => obj[key];

nlf.find(
  {
    directory: process.cwd(),
    production: true
  },
  (err, data) => {
    const modules = data.map(dependency => ({
      name: dependency.name,
      licenses: dependency.licenseSources.package.sources
        .map(source => parse(correct(pick("license")(source))))
        .filter(notDual)
        .map(pick("license"))
        .map(license => licenses.parse(license))
        .filter(license => license)
    }));

    const allLicenses = [
      ...new Set(
        modules
          .map(({ licenses }) => licenses)
          .reduce((all, licenses) => [...all, ...licenses], [])
      )
    ];

    console.log(JSON.stringify(allLicenses.map(({ name }) => name)));

    commonAncestor(allLicenses, findCompatible, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  }
);
