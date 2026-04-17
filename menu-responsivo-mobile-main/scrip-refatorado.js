// inicializa um componente de menu mobile.
// recebe o elemento como parametro para permitir reutilização

const criarMenu = (menu) => {
    // seleciona elementos internos do componente
    const botao = menu.querySelector('.menu__botao');

    const toggleMenu = () => {

        menu.classList.toggle('active');

        const ativo = menu.classList.contains('active');

        botao.setAttribute(
            'aria-label',
            ativo ? 'Fechar Menu' : 'Abrir Menu'
        );
    };

    const fecharComEsc = (event) => {
        const isEsc = event.key === 'Escape';
        const ativo = menu.classList.contains('active');
        
        if (isEsc && ativo) {
            menu.classList.remove('active');

            botao.setAttribute('aria-expanded', false);

            botao.setAttribute('aria-label', 'Abrir Menu');

            botao.focus();                                                          
        }
    };

    botao.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', fecharComEsc);
}


document.querySelectorAll('[data-menu]').forEach(menu)