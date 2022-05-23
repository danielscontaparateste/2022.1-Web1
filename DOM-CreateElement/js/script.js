var certo = 10;


function criarBlocos(){
    
    const inputQuantidade = document.querySelector("#iptQuantidade");
    const qtd = inputQuantidade.value;
    
    let gtc = "";
    let codCell = 0;
    for (let c=0; c<qtd; c++){
        
        for (let k = 0; k<qtd; k++){
            const bloco = document.createElement("div");
            bloco.classList.add('box');
            bloco.innerHTML = "<span class='infoBloco'>"+codCell+"</span>";
            bloco.value = codCell;
            // bloco.setAttribute("id", k);
            // bloco.onclick = function (){alert("Olá mundo")};
            
            // bloco.addEventListener("click", cellClickHandler)
            bloco.addEventListener("click", function() {
                if (this.value == certo){
                    this.style.backgroundColor = "green";
                }else{
                    this.style.backgroundColor = "red";
                }
                                
                //alert(this.value);
                spanClicado = document.querySelector("#spanClicado");
                spanClicado.innerHTML = this.value;
              });
            
            const jogo = document.querySelector("#jogo");
            jogo.appendChild(bloco);

            codCell++;
        }    
        // const quebraLinha = document.createElement("br");
        // jogo.appendChild(quebraLinha);
        gtc = gtc + " auto";
    }

    // document.querySelectorAll(".box").forEach(cell => {
    //     cell.addEventListener("click", cellClickHandler)
    // });

    function cellClickHandler(){
        alert("OI turma");
    }
    
    // function cellClickHandler(e){
    //     // e.target.classList.toggle("green")
    //     alert(e.target.value);
    // }

    jogo.style.gridTemplateColumns = gtc;

}

