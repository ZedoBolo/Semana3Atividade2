const itens = ["Guarabira", "Belém", "Sapé"];
// declara um array com três cidades.

const html = `<ol>${itens.map((item) => `<li>${item}</li>`).join('')}</ol>`;
// transforma cada cidade em um <li>, junta tudo e coloca dentro de uma <ol> com template string.

// resumindo o código cria uma string com a lista em HTML assim:
// <ol><li>Guarabira</li><li>Belém</li><li>Sapé</li></ol>
