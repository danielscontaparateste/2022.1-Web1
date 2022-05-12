function criarParagrafo(){
    const para = document.createElement("p");
    para.innerText = "Paragrafo gerado";

    // Anexar ao body
    document.body.appendChild(para);
}


function criarBlocos(){
    
    const inputQuantidade = document.querySelector("#iptQuantidade");
    const qtd = inputQuantidade.value;
    
    for (k = 0; k<qtd; k++){
        const bloco = document.createElement("div");
        bloco.classList.add('box');
        bloco.innerHTML = "<span class='infoBloco'>"+k+"</span>";
        // Anexar ao body
        // document.body.appendChild(bloco);

        const body = document.querySelector("body");
        body.appendChild(bloco);
    }    

}