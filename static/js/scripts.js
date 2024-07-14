// // scripts.js

// Função para carregar uma página específica
function carregarPagina(pagina) {
    // Faz uma requisição HTTP para obter o conteúdo da página
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Atualiza o conteúdo do elemento "conteudo" no HTML principal
        document.getElementById("conteudo").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", pagina, true);
    xhr.send();
  }
  
carregarPagina("templates/home.html");

  // Carrega a página inicial


// function construction(){
//   carregarPagina("templates/construction.html");
// }

function construction(){
  carregarPagina("templates/construction.html");
}

function home(){
  carregarPagina("templates/home.html");
}
