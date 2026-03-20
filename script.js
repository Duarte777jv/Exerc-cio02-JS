function avaliarCandidato() {
    // Pegando os valores dos inputs e convertendo para número
    const idadeInput = document.getElementById('idade');
    const horasVooInput = document.getElementById('horasVoo');
    const notaInput = document.getElementById('nota');
    
    const idade = Number(idadeInput.value);
    const horasVoo = Number(horasVooInput.value);
    const nota = Number(notaInput.value);
    
    // Elemento de resultado
    const resultadoDiv = document.getElementById('resultado');
    
    // Validando se os campos estão vazios ou valores inválidos
    if (idadeInput.value === '' || horasVooInput.value === '' || notaInput.value === '') {
        resultadoDiv.textContent = 'Erro: Preencha todos os campos';
        resultadoDiv.classList.remove('apto', 'inapto');
        return;
    }
    
    // Validando se os valores são números válidos
    if (isNaN(idade) || isNaN(horasVoo) || isNaN(nota)) {
        resultadoDiv.textContent = 'Erro: Digite valores numéricos válidos';
        resultadoDiv.classList.remove('apto', 'inapto');
        return;
    }

    // Verificando os critérios
    let mensagem = '';
    let apto = true;

    if (idade < 25) {
        mensagem = 'Inapto: Idade abaixo do mínimo (mínimo 25 anos)';
        apto = false;
    } else if (idade > 45) {
        mensagem = 'Inapto: Idade acima do máximo (máximo 45 anos)';
        apto = false;
    } else if (horasVoo < 1000) {
        mensagem = 'Inapto: Horas de voo insuficientes (mínimo 1000 horas)';
        apto = false;
    } else if (nota < 8) {
        mensagem = 'Inapto: Nota psicológica abaixo do mínimo (necessário ≥ 8)';
        apto = false;
    }

    if (apto) {
        resultadoDiv.textContent = '✅ Apto! Parabéns! Você atende a todos os critérios para a Missão Marte 2030. 🌟';
        resultadoDiv.classList.remove('inapto');
        resultadoDiv.classList.add('apto');
    } else {
        resultadoDiv.textContent = '❌ ' + mensagem;
        resultadoDiv.classList.remove('apto');
        resultadoDiv.classList.add('inapto');
    }
}

// Permite pressionar Enter para avaliar
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            avaliarCandidato();
        }
    });
});