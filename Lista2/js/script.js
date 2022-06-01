function calcular(){
    const iptValor = document.querySelector("#iptValor");
    let valor = parseFloat(iptValor.value);
    // alert(valor);

    valor = valor + (10/100)*valor;

    const spnResultado = document.querySelector("#spnResultado");
    spnResultado.innerHTML = "Valor a ser pago: R$ " + valor.toFixed(2);


}