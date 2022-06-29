function alterarLargura(){
    const lbl = document.querySelector("#lblLargura");
    const ipt = document.querySelector("#iptLargura");
    lbl.innerHTML= ipt.value;

    const divBox = document.querySelector("#box");
    divBox.style.width = ipt.value+"px";
    
}


function alterarAltura(){
    const lbl = document.querySelector("#lblAltura");
    const ipt = document.querySelector("#iptAltura");
    lbl.innerHTML= ipt.value;

    const divBox = document.querySelector("#box");
    divBox.style.height = ipt.value+"px";
    
}