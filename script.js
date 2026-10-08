const form = document.querySelector("#formCadastro");
const buscarCep = document.querySelector("#buscarCep");
const cep = document.querySelector("#cep");
function mensagem(texto, tipo = "sucesso") {
    Toastify({
        text: texto,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: tipo === "sucesso"
                ? "#198754"
                : "#dc3545"
        }
    }).showToast();
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(Object.fromEntries([...form.elements].filter(element => element.id).map (element => [element.id, element.value])));
    form.reset();
});

buscarCep.addEventListener("click", function() {
    const valor = cep.value.replace(/\D/g, "");
    if (valor.length !== 8) {
        alert("digite um Cep válido.");
        return;
    } try {
        const resposta = await fetch(`viacep.com.br/ws/$(valor)/json/`);
        const dados = await respostas.json();
        if (!resposta.ok  || dados.erro) 
            throw new Error("CEP não encontrado");
        document.querySelector("#logradouro").value = dados.
        document.querySelector("#bairro").value = dados.
        document.querySelector("#estado").value = dados.
        document.querySelector("#cidade").value = dados.
        console.log(dados);
    } catch (erro) {
        alert("erro capturado: " + erro.mensenge);
    }
    console.log();
})