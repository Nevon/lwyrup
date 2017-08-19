const License = require("./license");

const AGPL3 = new License(
  "AGPL-3.0",
  "GNU Affero General Public License v3.0",
  []
);
const AGPL1 = new License(
  "AGPL-1.0",
  "GNU Affero General Public License v1.0",
  []
);
const RPL15 = new License("RPL-1.5", "Reciprocal Public License 1.5", []);
const RPL11 = new License("RPL-1.1", "Reciprocal Public License 1.1", []);
const OSL3 = new License("OSL-3.0", "Open Software License 3.0", []);
const OSL21 = new License("OSL-2.1", "Open Software License 2.1", []);
const OSL2 = new License("OSL-2.0", "Open Software License 2.0", []);
const OSL11 = new License("OSL-1.1", "Open Software License 1.1", []);
const OSL1 = new License("OSL-1.0", "Open Software License 1.0", []);
const ODbl1 = new License("ODbl-1.0", "ODC Open Database License v1.0", []);
const MSRL = new License("MS-RL", "Microsoft Reciprocal License", []);
const GPL3 = new License("GPL-3.0", "GNU General Public License v3.0 only", [
  AGPL3
]);
const GPL2 = new License("GPL-2.0", "GNU General Public License v2.0 only", []);
const MPL2 = new License("MPL-2.0", "Mozilla Public License 2.0", []);
const MPL11 = new License("MPL-1.1", "Mozilla Public License 1.1", []);
const LGPL3 = new License(
  "LGPL-3.0",
  "GNU Lesser General Public License v3.0 only",
  [GPL3, AGPL3]
);
const LGPL21 = new License(
  "LGPL-2.1",
  "GNU Lesser General Public License v2.1 only",
  [GPL3, GPL2, AGPL3]
);
const LGPL2 = new License(
  "LGPL-2.0",
  "GNU Lesser General Public License v2.0 only",
  []
);
const EPL1 = new License("EPL-1.0", "Eclipse Public License 1.0", []);
const Apache2 = new License("Apache-2.0", "Apache License 2.0", [
  LGPL3,
  GPL3,
  AGPL3
]);
const BSD3Clause = new License(
  "BSD-3-Clause",
  'BSD 3-clause "New" or "Revised" License',
  [Apache2, LGPL21, LGPL3, MPL11, GPL2, GPL3, AGPL3]
);
const X11 = new License("X11", "X11 License", [
  Apache2,
  BSD3Clause,
  LGPL21,
  LGPL3,
  MPL11,
  GPL2,
  GPL3,
  AGPL3
]);
const WTFPL = new License(
  "WTFPL",
  "Do What The F*ck You Want To Public License",
  []
);
const MIT = new License("MIT", "MIT License", [
  Apache2,
  BSD3Clause,
  LGPL21,
  LGPL3,
  MPL11,
  GPL2,
  GPL3,
  AGPL3
]);
const ECL2 = new License("ECL-2.0", "Educational Community License v2.0", []);
const DSDP = new License("DSDP", "DSDP License", []);
const BSD3ClauseClear = new License(
  "BSD-3-Clause-Clear",
  "BSD 3-clause Clear License",
  []
);
const BSD3ClauseAttribution = new License(
  "BSD-3-Clause-Attribution",
  "BSD with attribution",
  []
);
const BSD2Clause = new License(
  "BSD-2-Clause",
  'BSD 2-clause "Simplified" License',
  []
);
const Artistic2 = new License("Artistic-2.0", "Artistic License 2.0", []);
const Unlicense = new License("Unlicense", "The Unlicense", [
  Apache2,
  BSD3Clause,
  MIT,
  X11,
  LGPL21,
  LGPL3,
  MPL11,
  GPL2,
  GPL3,
  AGPL3
]);
const SAXPD = new License("SAX-PD", "Sax Public Domain Notice", [
  Apache2,
  BSD3Clause,
  MIT,
  X11,
  LGPL21,
  LGPL3,
  MPL11,
  GPL2,
  GPL3,
  AGPL3
]);
const PDDL1 = new License(
  "PDDL-1.0",
  "ODC Public Domain Dedication & License 1.0",
  [Apache2, BSD3Clause, MIT, X11, LGPL21, LGPL3, MPL11, GPL2, GPL3, AGPL3]
);
const CC01 = new License("CC0-1.0", "Creative Commons Zero v1.0 Universal", [
  Apache2,
  BSD3Clause,
  MIT,
  X11,
  LGPL21,
  LGPL3,
  MPL11,
  GPL2,
  GPL3,
  AGPL3
]);

const licenses = {
  AGPL3,
  AGPL1,
  RPL15,
  RPL11,
  OSL3,
  OSL21,
  OSL2,
  OSL11,
  OSL1,
  ODbl1,
  MSRL,
  GPL3,
  GPL2,
  MPL2,
  MPL11,
  LGPL3,
  LGPL21,
  LGPL2,
  EPL1,
  Apache2,
  X11,
  WTFPL,
  MIT,
  ECL2,
  DSDP,
  BSD3ClauseClear,
  BSD3ClauseAttribution,
  BSD3Clause,
  BSD2Clause,
  Artistic2,
  Unlicense,
  SAXPD,
  PDDL1,
  CC01
};

module.exports = licenses;
module.exports.parse = license =>
  Object.keys(licenses)
    .map(key => licenses[key])
    .find(({ name }) => name === license);
