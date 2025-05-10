const tamanho = prompt('Digite o tamanho da lista de números');
// declada a constante "tamanho" que vai ser representada pelo valor que o usuario escrever no prompt.

const lista = new Array(tamanho).fill(null);
// declara a constante lista, cria um array com o new Array com o valor de tamanho, e prenche com nulo.

lista
 .map((item, index) => index + 1)
   // arrow function com dois parametros, vai transformar todos os nulls pela posição q eles indicam na lista.
 
 .reduce((acumulador, item) => acumulador * item);
   // arrow function com dois parametros, o reduce faz com q o acumulador pegue o valor total ate agora e multiplique pelo proximo item, fazendo isso com todos da lista e retornando apenas um valor final. 


new Array(tamanho)
 .fill(null)
//cria um array tamanho e preenche com nulo.

 .map((item, index) => index + 1)
//arrow function com dois parametros que ignora os nulls e transforma os valores nas posições deles na lista.

 .reduce((acumulador, item) => acumulador + item);
 //arrow function com dois parametros, o acumulador pega o valor total ate agora e soma com o proximo resultando em apenas um valor com o resultado de todas as somas.


 // resumindo o codigo pede pra o usuario escrever um numero
 // o codigo cria uma lista de 1 a 5 por exemplo
 //ele multiplica todos os numeros 1 * 2 * 3 * 4 * 5 = 120
 //ele soma todos os numero 1 + 2 + 3 + 4 + 5 = 15  
