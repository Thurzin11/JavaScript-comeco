const notas = [10, 6.5, 8, 7.5];
let media = 0;
let soma = 0;

for (let index = 0; index < notas.length; index++) {
    
    soma = notas[index] + soma;
}
    media = soma/notas.length;
    console.log(`A media das notas é ${media}`);