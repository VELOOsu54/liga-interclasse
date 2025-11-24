// assets/script.js
document.addEventListener('DOMContentLoaded', () => {
  // seleciona apenas os cards dentro das seções de equipe
  const cards = document.querySelectorAll('.card-container .card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 30px #000000ff';
      card.style.border = '2px solid #389748';
      card.style.transition = 'box-shadow 0.3s ease, border 0.3s ease, transform 0.3s ease';
      card.style.transform = 'scale(1.05)'; // dá uma leve “movida” no card
    });

    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
      card.style.border = '2px solid transparent';
      card.style.transform = 'scale(1)';
    });
  });
});

// assets/script.js
document.addEventListener('DOMContentLoaded', () => {
  const jogos = [
    { data: 'A DEFINIR', equipes: '3°AV TECNICO X 3° FLUXO' },
    { data: 'A DEFINIR', equipes: '1°CV REGULAR X 1°AV INTEGRAL' },
    { data: 'A DEFINIR', equipes: '3° FLUXO VESP X 3°A TEC VESP' },
    { data: 'A DEFINIR', equipes: 'Palmeiras X Santos' },
    { data: 'A DEFINIR', equipes: 'Palmeiras X Santos' },
    { data: 'A DEFINIR', equipes: 'Palmeiras X Santos' },
  ];

  const barra = document.querySelector('.barra-jogos');
  barra.innerHTML = ''; // limpa antes

  jogos.forEach(jogo => {
    const div = document.createElement('div');
    div.classList.add('jogo');
    div.innerHTML = `<span class="data">${jogo.data}</span>
                     <span class="equipes">${jogo.equipes}</span>`;
    barra.appendChild(div);
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-container .card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (window.innerWidth > 800) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 0 25px #0005';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '';
    });
  });
});

// MENU MOBILE
// document.addEventListener('DOMContentLoaded', () => {
//   const btn = document.getElementById('mobile_btn');
//   const menu = document.getElementById('mobile_menu');

//   btn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     btn.querySelector('i').classList.toggle('fa-x');
//   });
// });


console.log("pass")