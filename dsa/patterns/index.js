
// star printing
const prompt = require('prompt-sync')();
let n=Number(prompt("enter the rows"))
// let m=Number(prompt("enter the col"))


// print an centred payramind pattern
// for(let i=1; i<=n; i++){
//     let line="";
//     for(let k=1; k<=n-i; k++){
//         line=line+" "
//     }
//     for(let j=1; j<=i; j++){
//         line=line+'* '
// }
// console.log(line);
// }
// print an centred reverse payramind pattern
for(let i=1; i<=n; i++){
    let line = "";
    for(let j=1; j<=i; j++){
        line=line+" "
    }
    for(let k=n; k>=i; k--){
        line=line+"* "
    }
    console.log(line)
}