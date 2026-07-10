

function factorial(number){
    let factorial=1;
    for(let i=1; i<=number; i++){
    factorial=factorial*i
    }
    return factorial;
}

let value=factorial(5);
console.log(value);