document.addEventListener("DOMContentLoaded", function () {
    
    const elementosParaAnimar = document.querySelectorAll(
        '.about, .card, .price-box, .professional, .testimonial, form, .map-box, .section-title'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.12 
    });

    elementosParaAnimar.forEach(elemento => {
        elemento.classList.add('scroll-animado');
        observer.observe(elemento);
    });

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;

            const dataFormatada = data ? data.split('-').reverse().join('/') : 'A combinar';

            const mensagem = `Olá, gostaria de agendar um horário!\n\n` +
                             `*Nome:* ${nome}\n` +
                             `*Telefone:* ${telefone}\n` +
                             `*Serviço:* ${servico}\n` +
                             `*Data:* ${dataFormatada}\n`;

            const numeroWhats = "5561999013582"; 
            const url = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(mensagem)}`;

            window.open(url, '_blank');
        });
    }
});