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

            const observacoes =
document.getElementById('observacoes').value;

const mensagem =
`Olá, gostaria de agendar um horário!

*Nome:* ${nome}
*Telefone:* ${telefone}
*Serviço:* ${servico}

*Observações:*
${observacoes}`;


            const numeroWhats = "5561999013582"; 
            const url = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(mensagem)}`;

            window.open(url, '_blank');
        });
    }
});
const texto = "Depilação com Cera";
const titulo = document.getElementById("tituloHero");

if(titulo){
    titulo.innerHTML = "";

    let i = 0;

    function escrever(){
        if(i < texto.length){
            titulo.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escrever, 80);
        }
    }

    escrever();
}
let numero = 0;
const contador = document.getElementById("contador");

function animarNumero(){
    const intervalo = setInterval(() => {
        numero += 10;

        contador.innerHTML = "+" + numero + " visitantes";

        if(numero >= 500){
            clearInterval(intervalo);
        }
    }, 20);
}

animarNumero();
window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const altura =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const porcentagem = (scroll / altura) * 100;

    document.getElementById("progresso").style.width =
        porcentagem + "%";
});
const darkBtn = document.getElementById("darkModeBtn");

if(localStorage.getItem("tema") === "dark"){
    document.body.classList.add("dark");
    darkBtn.checked = true;
}

darkBtn.addEventListener("change", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","dark");
    } else {
        localStorage.setItem("tema","light");
    }

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const pergunta = item.querySelector(".faq-question");

    pergunta.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (!header) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // descendo → esconde
        header.style.transform = "translateY(-100%)";
    } else {
        // subindo → mostra
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});