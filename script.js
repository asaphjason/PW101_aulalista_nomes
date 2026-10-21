//lista inicial de estudante armazenada em um array

const listaDeEstudante = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniel Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinicios",

];

const elementoLista = document.getElementById("listaEstudantes");
const elemntoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    elementoLista.innerHTML = "";

    for (let i = 0; i< listaDeEstudante.length; i++) {
const itemLi = document.createElement("li");
itemLi.className = "item-nome";

itemLi.innerHTML = `
<span>${listaDeEstudante[i]}</span>
<span class="posicao-tag">#${i + 1}</span>
`;

elementoLista.appendChild(itemLi);
    }

    elementoContador.innerText = `total exibido ${listaDeEstudante.length} estudantes cadastrados.
    `;
    elementoContador.style.color =" #16a34a";

    console.log(`lista exibida com sucesso: ${listaDeEstudante.length} itens processados.`);
}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText = `lista limpa pelo usuario. nenhum nome na tela.`;
    elementoContador.style.color = "#475569";
    console.log("tela limpa");

}

function adicionarNovoNome()
{
    const campoNovoNome = document.getElementById("campoNovoNome");
    const novoNome =  campoNovoNome.value.trim();

    if(novoNome !=="")
    {
      listaDeEstudante.push(novoNome);
      exibirListaAutomaticamente();
      campoNovoNome.value = "";
      campoNovoNome.focus();
    }

}


exibirListaAutomaticamente()