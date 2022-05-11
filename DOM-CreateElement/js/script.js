function criarParagrafo(){
    const para = document.createElement("p");
    para.innerText = "Paragrafo gerado";

    // Anexar ao body
    document.body.appendChild(para);
}


function criarBlocos(){
    const bloco = document.createElement("div");
    bloco.classList.add('box');

    // Anexar ao body
    document.body.appendChild(bloco);
}