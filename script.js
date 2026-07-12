const search = document.querySelector('#unitSearch');
const cards = [...document.querySelectorAll('.unit-card')];
const count = document.querySelector('#unitCount');

search?.addEventListener('input', (event) => {
  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR');
  const query = normalize(event.target.value.trim());
  let visible = 0;
  cards.forEach((card) => {
    const matches = normalize(card.dataset.search).includes(query);
    card.classList.toggle('hidden', !matches);
    if (matches) visible += 1;
  });
  count.textContent = `${visible} unidade${visible === 1 ? '' : 's'}`;
});

document.querySelectorAll('[data-unit]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#unitSelect').value = link.dataset.unit;
  });
});

document.querySelector('#vipForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  const unit = new FormData(event.currentTarget).get('unit');
  const message = `Olá! Sou ${name} e quero saber mais sobre a T4 Fitness ${unit}. Vim pelo site.`;
  window.open(`https://www.instagram.com/t4fitness_/`, '_blank', 'noopener,noreferrer');
  event.currentTarget.reset();
  event.currentTarget.querySelector('small').textContent = `Perfeito, ${name}! Abrimos o Instagram da T4 para você continuar o atendimento sobre a unidade ${unit}.`;
});

const menu = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');
menu?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => header.classList.remove('menu-open')));
