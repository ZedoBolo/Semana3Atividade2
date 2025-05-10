const letras = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];
// declara a constante letras, que é uma matriz com subarrays de letras.

let resultado = letras.flat()
// transforma a matriz em um array só, achata tudo: ['a','b','c','c','d','f','d','f','g'].

.reduce((objeto, letra) => {
  objeto[letra] = (objeto[letra] || 0) + 1;
  // se a letra já estiver no objeto, soma +1, se não, começa com 1.
  return objeto;
}, {});
// inicia o reduce com um objeto vazio e vai acumulando as contagens dentro dele.

// resumindo o codigo conta quantas vezes cada letra aparece e devolve algo tipo: { a:1, b:1, c:2, d:2, f:2, g:1 }
