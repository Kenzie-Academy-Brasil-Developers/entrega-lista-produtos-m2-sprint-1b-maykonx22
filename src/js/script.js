const ul = document.querySelector(".containerListaProdutos ul");

const total = document.querySelector("#precoTotal");

const botaoMostrarHortifruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti"
);

const botaoMostrarTudo = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos"
);

function montarListaProdutos(listaProdutos) {
  ul.innerHTML = "";
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    img.src = produto.img;
    img.alt = produto.nome;
    h3.innerText = produto.nome;
    p.innerText = produto.preco;
    span.innerText = produto.secao;

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);

    ul.appendChild(li);
  });

  total.innerHTML = " 00.00";
  let soma = 0;
  listaProdutos.forEach((produto) => {
    soma += produto.preco;
  });
  total.innerHTML = ` ${soma},00`;
}

function filtrarPorHortifruti() {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti";
  });

  montarListaProdutos(listaHortifruti);
}

montarListaProdutos(produtos);

botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti);

botaoMostrarTudo.addEventListener("click", () => {
  return montarListaProdutos(produtos);
});

const buscar = document.querySelector(".campoBuscaPorNome");

const botaoBuscar = document.querySelector(
  ".estiloGeralBotoes--botaoBuscaPorNome"
);

function filtrarPorNome(buscar) {
  const listaPorNome = produtos.filter((produto) => {
    return produto.nome.toLowerCase() === buscar;
  });

  return listaPorNome;
}

botaoBuscar.addEventListener("click", () => {
  montarListaProdutos(filtrarPorNome(buscar.value.toLowerCase()));
  buscar.value = "";
});
