
var candidatos = ['Jessica','Joao Victor','Jamille','Ismael','Gabriel'];
var votosCands = [];
 
function votar(){

    const tempo = 2;
    
    // Desabilitar o botao de votar
    const btnVotar = document.querySelector("#btnVotar");
    btnVotar.disabled = true;

    const btnResultado = document.querySelector("#btnResultado");
    btnResultado.disabled = true;

    const iptCands = document.getElementsByName("candidatos");
    let seVoto = false;
    for (var k=0; k<iptCands.length; k++){
        if (iptCands[k].checked){
            seVoto = true;
            break;
        }
    }

    const spnMsg = document.getElementById("msg");    
    if (seVoto){
        votosCands[k] = votosCands[k]+1;    
        
        contadorRegressivo(tempo, true);

        spnMsg.innerHTML = "Obrigado pelo seu voto. ";
        setTimeout(function () {
            spnMsg.innerHTML = "";
            iptCands[k].checked = false;
            btnVotar.disabled = false;  
            btnResultado.disabled = false; 
            contadorRegressivo(tempo, false);
        }, tempo * 1000);    
    }else{
        spnMsg.innerHTML = "Por favor, selecione o seu candidato. ";
        btnVotar.disabled = false;   
        btnResultado.disabled = false;
    }
}

function resultado(){

    document.querySelector("#btnVotar").disabled = true;
        
    var msg = "<table>";
    for (let k=0; k<candidatos.length; k++){
        msg += "<tr>";
        msg += "<td>"+candidatos[k]+"</td>";
        msg += "<td>"+votosCands[k]+"</td>";
        msg += "</tr>";
    }
    msg += "</table>";
    msg += "<hr>";
    msg += "O vencedor da eleição foi: ";
    msg += getVencedor();


    const spnMsg = document.getElementById("msg");
    spnMsg.innerHTML = msg;

    reiniciar();

}

function getVencedor(){
   
    const max = Math.max.apply(null, votosCands);

    let count = 0;
    for (let k=0; k<votosCands.length; k++){
        if (votosCands[k]==max){
            count = count + 1;
        }
    }
    if (count > 1) return "Empate";

    const idxMax = votosCands.indexOf(max);
    // console.log(max);
    return candidatos[idxMax];
    

}

function reiniciar(){
    const btnVotar = document.querySelector("#btnVotar");
    btnVotar.innerHTML = "Reiniciar";
    
    btnVotar.onclick = function () {
        alert("Essa urna será reiniciada. ");
        // window.location.reload();
        zerarVotos();
        const spnMsg = document.getElementById("msg");
        spnMsg.innerHTML = "";
        this.onclick = "";
        this.addEventListener("click", votar);
        this.innerHTML = "Votar";
    } ;


    btnVotar.disabled = false;

}

function contadorRegressivo(tempo, mostrar){
    
    const spnRegressivo = document.querySelector("#regressivo");

    if (mostrar){  
        spnRegressivo.innerHTML = tempo;  
        stReg = setInterval(function () {
            tempo = tempo - 1;
            spnRegressivo.innerHTML = tempo
        }, 1000);
    }else{
        clearInterval(stReg);
        spnRegressivo.innerHTML = "";
    }    
}   

function zerarVotos(){
    // Vetor com a quantidade de votos de cada candidado
    for (let k=0; k< candidatos.length; k++){
        votosCands[k] = 0;
    }
}


function iniciarUrna(){
    zerarVotos();

    const telaPrincipal = document.querySelector("#telaPrincipal");

    const pergunta = document.createElement("p");
    pergunta.innerHTML = "Quem deve ser o líder da turma?";

    const form = document.createElement("form");

    for (let k=0; k<candidatos.length;k++){
        const iptRadio = document.createElement("input");
        iptRadio.setAttribute("type", "radio");
        iptRadio.setAttribute("name", "candidatos");
        iptRadio.setAttribute("value", candidatos[k]);
        form.appendChild(iptRadio);
        const label = document.createElement("label");
        label.innerHTML = candidatos[k];
        form.appendChild(label);
        const quebraLinha = document.createElement("br");
        form.appendChild(quebraLinha);
    }

    const bttVotar = document.createElement("button");
    bttVotar.setAttribute("type", "button");
    bttVotar.setAttribute("id", "btnVotar");
    bttVotar.innerHTML = "Votar";
    bttVotar.addEventListener("click",votar);

    const bttRes = document.createElement("button");
    bttRes.setAttribute("type", "button");
    bttRes.setAttribute("id", "btnResultado");
    bttRes.innerHTML = "Resultado";
    bttRes.addEventListener("click",resultado);

    form.appendChild(bttVotar);
    form.appendChild(bttRes);

    const msg = document.createElement("span");
    msg.setAttribute("id", "msg");

    const regressivo = document.createElement("span");
    
    
    const hr = document.createElement("hr");
    
    telaPrincipal.appendChild(pergunta);
    telaPrincipal.appendChild(form);
    regressivo.setAttribute("id", "regressivo");
    telaPrincipal.appendChild(hr);
    telaPrincipal.appendChild(msg);
    telaPrincipal.appendChild(regressivo);
    
    bttIniciarUrna = document.querySelector("#btnInicializarUrna");
    bttIniciarUrna.remove();

}