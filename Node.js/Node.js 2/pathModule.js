const path = require('path');

const a = path.basename('C: \\temp\\myfile.html');
const b = path.dirname('C: \\temp\\myfile.html');
const b2 = path.extname(__filename);
console.log(a);
console.log(b);
console.log(b2);
console.log(__filename);