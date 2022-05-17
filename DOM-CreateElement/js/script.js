function criarParagrafo(){
    const para = document.createElement("p");
    para.innerText = "Paragrafo gerado";

    // Anexar ao body
    document.body.appendChild(para);
}


function criarBlocos(){
    
    const inputQuantidade = document.querySelector("#iptQuantidade");
    const qtd = inputQuantidade.value;
    
    let gtc = "";
    for (let c=0; c<qtd; c++){
        
        for (let k = 0; k<qtd; k++){
            const bloco = document.createElement("div");
            bloco.classList.add('box');
            bloco.innerHTML = "<span class='infoBloco'>"+k+"</span>";
            // bloco.value = k;
            // bloco.setAttribute("id", k);
            bloco.onclick = function (){alert("Olá mundo")};
            
            const jogo = document.querySelector("#jogo");
            jogo.appendChild(bloco);
        }    
        // const quebraLinha = document.createElement("br");
        // jogo.appendChild(quebraLinha);
        gtc = gtc + " auto";
    }

    jogo.style.gridTemplateColumns = gtc;

}

