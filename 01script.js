// Função para abrir modal com imagem
function abrirModal(src) {
    const modal = document.getElementById("modal");
    const imgModal = document.getElementById("imgModal");
    imgModal.src = src;
    modal.style.display = "block";
}

// Fechar modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Função de download com anúncio
function startDownload(file) {
    let countdown = 5;
    const overlay = document.getElementById('adOverlay');
    const counter = document.getElementById('countdown');
    overlay.style.display = 'block';
    
    const timer = setInterval(() => {
        countdown--;
        counter.textContent = countdown;
        if(countdown <= 0) {
            clearInterval(timer);
            overlay.style.display = 'none';
            window.location.href = file; // inicia o download
        }
    }, 1000);
}
