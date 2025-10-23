const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // Encontra o passo (div) que está atualmente visível
        const atual = document.querySelector('.passo.ativo');
        
        // Constrói o ID do próximo passo a partir do atributo 'data-proximo' do botão
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe 'ativo' do passo atual (esconde)
        if (atual) {
            atual.classList.remove('ativo');
        }

        // Adiciona a classe 'ativo' ao próximo passo (mostra)
        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        } else {
            console.error('Erro: Próximo passo não encontrado com o ID:', proximoPasso);
        }
    })
})