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