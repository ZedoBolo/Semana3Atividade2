const estudantes = [
  { nome: 'Alice', notas: [100, 60, 92] },
  { nome: 'João', notas: [75, 30, 85] },
  { nome: 'Charles', notas: [90, 95, 85] },
  { nome: 'Paulo', notas: [100, 100, 100] },
];
// declara um array de objetos com nome e notas de cada aluno.

const estudantesMedias = estudantes.map((estudante) => {
  const total = estudante.notas.reduce((soma, nota) => soma + nota);
  // pega todas as notas e soma tudo.
  return { nome: estudante.nome, media: total / estudante.notas.length };
  // retorna um novo objeto com o nome do estudante e a média.
});
// cria uma nova lista com o nome de cada aluno e a média das notas.

const melhoresMedias = estudantesMedias.filter((student) => student.media > 90);
// filtra apenas os alunos que tiraram média acima de 90.

// resumindo o código calcula a média de cada aluno e devolve só quem foi muito bem, acima de 90.
