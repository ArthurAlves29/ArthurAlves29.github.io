const btnDarkMode = document.getElementById('btn-dark-mode');
const body = document.body;

btnDarkMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'Desativar Modo Noturno';
    } else {
        btnDarkMode.textContent = 'Modo Noturno';
    }
});


const botoesMusica = document.querySelectorAll('.btn-toggle-musica');

botoesMusica.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const containerMusica = this.nextElementSibling;
        
        containerMusica.classList.toggle('oculto');
        
        if (containerMusica.classList.contains('oculto')) {
            this.textContent 
        } else {
            this.textContent 
        }
    });
});

const formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', function(evento) {
    
    const certeza = confirm("Tem certeza de que deseja enviar este formulário?");
    
    if (!certeza) {
        evento.preventDefault(); 
        alert("Envio cancelado!"); 
    } else {
        alert("Formulário enviado com sucesso!");
    }
});

let tamanhoFonte = 100;

const btnAumentar = document.getElementById('btn-aumentar-fonte');
const btnDiminuir = document.getElementById('btn-diminuir-fonte');

// Verificação de segurança: só ativa se os botões existirem na página atual
if (btnAumentar && btnDiminuir) {
    btnAumentar.addEventListener('click', function() {
        tamanhoFonte = tamanhoFonte + 10; // Aumenta de 10 em 10%
        document.body.style.fontSize = tamanhoFonte + '%'; 
    });

    btnDiminuir.addEventListener('click', function() {
        if (tamanhoFonte > 60) { // Limite mínimo para o texto não sumir da tela
            tamanhoFonte = tamanhoFonte - 10; // Diminui de 10 em 10%
            document.body.style.fontSize = tamanhoFonte + '%'; 
        }
    });
}