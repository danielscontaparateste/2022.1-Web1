const readline = require('readline-sync');

do{

    let a = parseInt(readline.question('Digite o primeiro número '));
    let b = parseInt(readline.question('Digite o segundo número '));

    // MENU
    console.log('0: Somar');
    console.log('1: Subtracao');
    console.log('2: Multiplicacao');
    console.log('3: Divisao');
    console.log('4: Somatório de intervalo');
    console.log('5: Sair');

    var op = parseInt(readline.question('Digite uma das opções:' ));

    let s = 0;
    switch(op){
        case 0:
            s = a+b;
        break;
        case 1:
            s = a-b;
        break;
        case 2:
            s = a*b;
        break;
        case 3:
            s = a/b;
        break;
        case 4:
            for (let k=a; k<=b; k++){
                s += k;
            }
        break;
        default:
            if (op!=5) console.log("Opção Inválida. ");
    }
    if (op!=5) console.log("Resultado: "+s);

}while(op != 5);

console.log('Tchau!!!');

// console.log(`Resultado: ${s} e é ${s%2?"IMPAR":"PAR"}`);*/

