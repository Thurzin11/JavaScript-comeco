const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNotaEAluno(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        const alunos = listaDeAlunosEMedias[0];

        const medias = listaDeAlunosEMedias[1];

        console.log(`O aluno ${aluno} está cadastrado!`)

        const indice = alunos.indexOf(aluno);

        console.log(`A media do ${aluno} é de ${medias[indice]}`);

    }else{

        console.log("Aluno não cadastrado!");

    }
}
exibeNotaEAluno("Juliana");