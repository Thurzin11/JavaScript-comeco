const notas = [10, 6.5, 8, 7.5];
let somaNota = 0;
let mediaNotas = 0;

for( let nota of notas){
    somaNota += nota;
}

mediaNotas = somaNota/notas.length;

console.log(`A media das notas é ${mediaNotas}`);