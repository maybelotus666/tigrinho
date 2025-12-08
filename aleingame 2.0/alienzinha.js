function girar () {
    const itens = document.querySelectorAll('.slot-coluna');

    colunas.forEach(coluna => {
        coluna.classeList.add('girando...');
    });

    setTimeout(() => {
        colunas.forEach(coluna => {
            const randomPosition = coluna.classList.remove('girando...');

            const items = coluna.querySelectorAll('.item');
            const sorteado = Math.floor(Math.random() * items.length);

            coluna.style.transform = `translateY(-${sorteado * 100}%)`;

        });

    }, 2000);

}