
const btnDarkMode = document.getElementById('btn-dark-mode');
if (btnDarkMode) {
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}


const formulario = document.getElementById('form-contato');
if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        if (!confirm("Tem certeza que deseja enviar?")) {
            evento.preventDefault();
        }
    });
}


let tamanhoFonte = 100;
const btnAumentar = document.getElementById('btn-aumentar-fonte');
const btnDiminuir = document.getElementById('btn-diminuir-fonte');

if (btnAumentar && btnDiminuir) {
    btnAumentar.addEventListener('click', function() {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + '%';
    });

    btnDiminuir.addEventListener('click', function() {
        if (tamanhoFonte > 60) {
            tamanhoFonte -= 10;
            document.body.style.fontSize = tamanhoFonte + '%';
        }
    });
}


const botoesMusica = document.querySelectorAll('.btn-toggle-musica');

botoesMusica.forEach(function(botao) {
    botao.addEventListener('click', function() {
        
        const containerMusica = this.nextElementSibling;
        
        
        containerMusica.classList.toggle('oculto');
        
        
        if (containerMusica.classList.contains('oculto')) {
            this.textContent = 'Mostrar Música';
        } else {
            this.textContent = 'Ocultar Música';
        }
    });
});

