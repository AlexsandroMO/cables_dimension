
console.log('FOI!')

// Defina os diâmetros dos cabos e eletrodutos em mm
const cableDiametersMm = {
    Cat5: 5.25,
    Cat5e: 6.0,
    Cat6: 6.5,
    Cat6a: 8.3,
    Cat7: 10.0
};

const eletrodutoDiametersMm = {
    "1/2”": 15.8,
    "3/4”": 21.3,
    "1”": 26.7,
    "2”": 53.4,
    "3”": 78.6,
    "4”": 103.6
};


function calcCirc() {

    //let result = document.getElementById("varResult").value;
    //console.log(result);
    let varCable = document.getElementById("cable");
    let cableSelectd = varCable.options[varCable.selectedIndex];
    let cableSelected = cableSelectd.getAttribute('data-select-id');

    let varEletro = document.getElementById("eletro")
    let eletroSelectd = varEletro.options[varEletro.selectedIndex];
    let eletroSelected = eletroSelectd.getAttribute('data-select-id');

    console.log(cableSelected, eletroSelected);

    let fillPercentage = 0.4

    let eletrodutoRadiusMm = Number(eletroSelected) / 2;
    let eletrodutoAreaMm2 = Math.PI * Math.pow(eletrodutoRadiusMm, 2);
    //console.log('>>>>>>> ', eletrodutoAreaMm2);
    // Área máxima de preenchimento
    let maxFillAreaMm2 = eletrodutoAreaMm2 * fillPercentage;
    //console.log('+++++++ ', maxFillAreaMm2);
    // Calcula a área ocupada por um cabo
    let cableRadiusMm = Number(cableSelected) / 2;
    let cableAreaMm2 = Math.PI * Math.pow(cableRadiusMm, 2);

    //console.log('------- ', cableAreaMm2);
    // Calcula quantos cabos cabem considerando a área máxima de preenchimento
    let numCables = Math.floor(maxFillAreaMm2 / cableAreaMm2);

    //let numCables = calculateCablesFit(Number(cableSelected), Number(eletroSelected));
    document.getElementById('varResult').placeholder = `Número de cabos do tipo ${varCable.value} que cabem no eletroduto de ${varEletro.value} (${eletroSelected}): ${numCables}`;


    console.log(`Número de cabos do tipo ${varCable.value} que cabem no eletroduto de ${varEletro.value} (${eletroSelected}): ${numCables}`);

}


// https://pt.stackoverflow.com/questions/465870/exibir-resultado-de-um-c%C3%A1lculo-na-tela




/* 
// Selecionar o elemento select
var selectElement = document.getElementById('cable');
var resultadoElement = document.getElementById('resultado');

// Adicionar um evento change ao elemento select
selectElement.addEventListener('change', function() {
    // Obter a opção selecionada
    var opcaoSelecionada = selectElement.options[selectElement.selectedIndex];

    // Obter o valor do atributo data-select-id da opção selecionada
    var valorDataSelectId = opcaoSelecionada.getAttribute('data-select-id');

    // Mostrar o valor do data-select-id no elemento de resultado
    resultadoElement.textContent = 'Você selecionou: ' + valorDataSelectId;
});


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Select com data-attribute</title>
</head>
<body>
    <h1>Escolha um tipo de cabo</h1>
    <select class="form-control" id="cable">
        <option name="0">-</option>
        <option name="5,25" data-select-id="5.25">Cat5</option>
        <option name="6,0" data-select-id="6.0">Cat5e</option>
        <option name="6,5" data-select-id="6.5">Cat6a</option>
        <option name="10,0" data-select-id="10.0">Cat7</option>
    </select>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
*/