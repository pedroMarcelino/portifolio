document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt('.animated', {
        speed: 200,
        loop: true
    }).type('Back-End', {delay: 900}).delete(8).pause(1500)
        .type('Front-End', {delay: 900}).delete(9).pause(1500)
        .type('Web', {delay: 900}).delete(3).pause(1500)
        .type('Full-Stack', {delay: 900}).delete(10).pause(1500)
    
    .go()
})

document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt('.animated2', {
        speed: 200,
        loop: true
    }).type('Back-End', {delay: 900}).delete(8).pause(1500)
        .type('Front-End', {delay: 900}).delete(9).pause(1500)
        .type('Web', {delay: 900}).delete(3).pause(1500)
        .type('Full-Stack', {delay: 900}).delete(10).pause(1500)
    
    .go()
})

document.addEventListener('click', function(event) {
    // Verificar se o elemento clicado é um <a> ou um <li> dentro da navbar
    if (event.target.matches('.nav-link') || event.target.closest('.nav-item')) {
        // Remover a classe 'clicked' de todos os elementos que a possuem
        document.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove('active');
        });
        // Adicionar a classe 'clicked' ao elemento clicado
        event.target.classList.add('active');
    }
});
