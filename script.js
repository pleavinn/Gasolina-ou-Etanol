let etanol, gasolina;

function calcular(){
    etanol = parseFloat(formularioFlex.valoretanol.value.replace("," , "."));
    gasolina = parseFloat(formularioFlex.valorgasolina.value.replace("," , "."));

    if(etanol <= (0.72 * gasolina)){
        document.querySelector('#status').src = "imagens/alcool.png";
    } else {
        document.querySelector('#status').src = "imagens/gasolina.png";
    }

}