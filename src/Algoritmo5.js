const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
// declara dois arrays com números.

const somaTotal = [...a, ...b].reduce((acc, val) => acc + val, 0);
// junta os dois arrays usando spread [...], depois usa reduce pra somar tudo começando do zero.

// resumindo o código soma todos os valores de a e b juntos, resultado: 55.
