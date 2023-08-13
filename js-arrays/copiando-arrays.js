const notas = [7, 7, 8, 9];

const novasNotas = [...notas];
//          OU
// const novasNotas = [...notas, 10]; mas sem o push no final
novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);