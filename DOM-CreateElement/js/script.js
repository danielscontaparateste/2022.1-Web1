// var corretos = [10, 7, 3];
function criarBlocos(){

    const inputQuantidade = document.querySelector("#iptQuantidade");
    const qtd = inputQuantidade.value;

    // var corretos = Array.from({length: 3}, () => Math.floor(Math.random() * (qtd*qtd-1)));
    var cartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    cartas = shuffle(cartas);
    
    let gtc = "";
    let codCell = 0;
    for (let c=0; c<qtd; c++){
        
        for (let k = 0; k<qtd; k++){
            const bloco = document.createElement("div");
            bloco.classList.add('box');
            bloco.value = cartas[codCell];
            bloco.innerHTML = "<span class='infoBloco'>"+bloco.value+"</span>";
            bloco.style.backgroundImage = "url('./imgs/interrogacao.png')";
            bloco.style.backgroundSize = "contain";
            
            // bloco.setAttribute("id", k);
            // bloco.onclick = function (){alert("Olá mundo")};
            
            // bloco.addEventListener("click", cellClickHandler)
            bloco.addEventListener("click", function() {
                if (corretos.includes(this.value)){
                    this.style.backgroundColor = "green";
                }else{
                    this.style.backgroundColor = "red";
                }
                                
                //alert(this.value);
                spanClicado = document.querySelector("#spanClicado");
                spanClicado.innerHTML = this.value;
              });

            bloco.addEventListener("mouseover", function() {
                this.style.border = "3px solid orange";
              });  
            
            bloco.addEventListener("mouseout", function() {
                this.style.border = "1px solid black";
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

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

