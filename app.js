// Small enhancements. All writing, project pages, and CV remain available without JavaScript.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let visibleCount = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) visibleCount++;
  });
  document.querySelector('#filter-status').textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
}));
document.querySelector('#print-cv')?.addEventListener('click', () => window.print());
