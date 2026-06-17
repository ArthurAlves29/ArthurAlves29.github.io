// 1. MODO NOTURNO
const btnDarkMode = document.getElementById('btn-dark-mode');
if (btnDarkMode) {
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

// 2. FORMULÁRIO DE CONTATO (Só roda se o formulário existir na página)
const formulario = document.getElementById('form-contato');
if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        if (!confirm("Tem certeza que deseja enviar?")) {
            evento.preventDefault();
        }
    });
}

// 3. AUMENTAR E DIMINUIR FONTE (Só roda se os botões existirem na página)
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

