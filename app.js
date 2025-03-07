// Array para armazenar os amigos
let amigos = []; 


// Função para falar o texto das tags h1 e h2
function falarTitulos() {
    // Captura o texto do h1
    let h1 = document.querySelector(".main-title").textContent;
    // Captura o texto do h2
    let h2 = document.querySelector(".section-title").textContent;

    // Combina os textos para serem falados em sequência
    let textoParaFalar = `${h1}. ${h2}`;

    // Usa o ResponsiveVoice para falar o texto
    responsiveVoice.speak(textoParaFalar, "Brazilian Portuguese Female");
}

falarTitulos();

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo"); 
    let nome = nomeInput.value.trim(); 

    if (nome === "") {
        let alerta = "Por favor, insira um nome.";
        alert(alerta);
        responsiveVoice.speak(alerta, "Brazilian Portuguese Female");
        return; 
        
    }
    amigos.push(nome);

    atualizarListaAmigos();
    responsiveVoice.speak(`Amigo ${nome} adicionado.`, "Brazilian Portuguese Female");
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item); 
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {

    if (amigos.length === 0) {
        let adicioneUmNome = "Adicione pelo menos um amigo antes de sortear!";
        alert(adicioneUmNome);
        responsiveVoice.speak(adicioneUmNome, "Brazilian Portuguese Female");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; 
    let itemResultado = document.createElement("li");
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`; 
    resultado.appendChild(itemResultado);

    confetti({
        particleCount: 200, 
        spread: 100,  
        origin: { y: 0.6 } 
    });
    responsiveVoice.speak(`Amigo Sorteado: ${amigoSorteado}.`, "Brazilian Portuguese Female");

}

// Função para iniciar um novo sorteio
function novoSorteio() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("amigo").value = ""; 
    falarTitulos();
}
