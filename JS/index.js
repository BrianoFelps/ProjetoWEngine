document.getElementById("modalContainer").innerHTML = 
  `
    <div id="modal">
        <div id="title">
            <h3>Erro do Steam</h3>
        </div>
        <div id="message">
            <p>Não é possível a conexão aos servidores SteamWorks!</p>
        </div>
        <div class="button">
            <button onclick="closeModal()">
                OK
            </button>
        </div>
    </div>
    `
;

closeModal();

function addWpp (){
    
}

function openModal (){
    document.getElementById("modalContainer").style.display = "flex";
    document.getElementById("modalOverlay").style.display = "flex";
    document.getElementById("modalContainer").style.opacity = "1";
    document.getElementById("modalOverlay").style.opacity = "1";
}

function closeModal(){
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("modalContainer").style.opacity = "0";
    document.getElementById("modalOverlay").style.opacity = "0";
}

// Limitar seleção de imagens para > 800x600px
document.getElementById('seletorArquivos').addEventListener('change', function(event) {
    var input = event.target;
    var files = input.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var img = new Image();

        img.onload = function() {
            // Verificar se a largura e altura da imagem atendem aos requisitos
            if (img.width >= 700 && img.height >= 500) {
                // A imagem atende aos requisitos, você pode realizar ações adicionais aqui
                console.log('Imagem válida:', file.name);
            } else {
                // A imagem não atende aos requisitos, você pode exibir uma mensagem de erro
                alert('A imagem ' + file.name + ' não atende aos requisitos de resolução (mínimo: 800x600).');
                // Remover o arquivo da lista de seleção
                input.value = '';
            }
        };

        img.src = URL.createObjectURL(file);
    }
});