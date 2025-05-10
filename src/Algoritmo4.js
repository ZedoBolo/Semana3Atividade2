const funcionarios = [
  { nome: 'João', salario: 30000, departamento: 'TI' },
  { nome: 'Janete', salario: 70000, departamento: 'RH' },
  { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];
// declara um array com objetos que têm nome, salário e departamento dos funcionários.

const funcionariosPorDepartamento = funcionarios.reduce((acc, funcionario) => {
  const dep = funcionario.departamento;
  if (!acc[dep]) acc[dep] = [];
  // se ainda não tiver esse departamento, cria ele como array vazio.
  acc[dep].push(funcionario);
  // adiciona o funcionário no array do departamento dele.
  return acc;
}, {});
// agrupa os funcionários por departamento dentro de um objeto.

const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map((dep) => {
  const total = funcionariosPorDepartamento[dep].reduce((acc, f) => acc + f.salario, 0);
  // soma todos os salários daquele departamento.
  return {
    departamento: dep,
    media: total / funcionariosPorDepartamento[dep].length
    // divide pela quantidade de funcionários pra tirar a média.
  };
});
// cria um novo array com cada departamento e a média de salário dele.

const maioresPagamentos = mediasSalarioPorDepartamento.filter(dep => dep.media > 65000);
// filtra só os departamentos que têm média salarial maior que 65000.

// resumindo o código agrupa funcionários por departamento, calcula a média dos salários e mostra só os que têm média alta.
