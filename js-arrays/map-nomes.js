const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) =>{
    return nome.toLocaleUpperCase();
});

console.log(nomesPadronizados);


// ou fazer com operador ternário

//const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

//const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

//console.log(nomesPadronizados);