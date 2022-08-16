const fs = require('fs');
// fs.readFile('file.txt','utf-8', (err,data)=>{
//     console.log(err,data)
// });
// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file2.txt','Abba dabba jabba', ()=>{
//     console.log('yo bro')
// });

const ka = fs.writeFileSync('file.txt','aaj aag laga denge lal killa quilla jalla denge')
console.log(ka);
console.log('finished reading file');