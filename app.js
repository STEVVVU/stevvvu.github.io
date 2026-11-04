import {profile, collections} from './profile.js';

const node = (tag, text, className) => {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
};

document.title = profile.name;
document.querySelector('meta[name="description"]').content = profile.description;
function renderRows(list, records, titleTag = 'h3') {
  for (const record of records) {
    const row = node('li', undefined, 'work-row');
    const body = node('div', undefined, 'row-body');
    const title = node(titleTag);
    if (record.url) {
      const destination = new URL(record.url);
      const anchor = node('a', record.title);
      if (destination.protocol === 'https:') anchor.href = destination.href;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      const arrow = node('span', '↗', 'arrow');
      arrow.setAttribute('aria-hidden', 'true');
      anchor.append(' ', arrow);
      title.append(anchor);
    } else title.textContent = record.title;
    const tags = node('ul', undefined, 'tags');
    tags.setAttribute('aria-label', 'Technologies used');
    for (const technology of record.technologies) tags.append(node('li', technology));
    body.append(title, node('p', record.description), tags);
    row.append(node('p', record.label, 'row-label'), body);
    list.append(row);
  }
}
renderRows(document.querySelector('#experience-list'), collections.experience);
const projectList = document.querySelector('#project-list');
for (const group of collections.projectGroups) {
  const section = node('section', undefined, 'project-group');
  section.id = group.id;
  const heading = node('h3', group.title, 'project-category');
  heading.id = group.id + '-title';
  section.setAttribute('aria-labelledby', heading.id);
  const list = node('ol', undefined, 'work-list');
  renderRows(list, group.projects, 'h4');
  section.append(heading, list);
  projectList.append(section);
}

const navigation = [...document.querySelectorAll('nav a')];
const sections = navigation.map(anchor => document.querySelector(anchor.hash));
function updateNavigation() {
  const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
  const current = atBottom ? sections.at(-1) : [...sections].reverse().find(section => section.getBoundingClientRect().top <= innerHeight * .35) || sections[0];
  for (const anchor of navigation) {
    if (anchor.hash === '#' + current.id) anchor.setAttribute('aria-current', 'location');
    else anchor.removeAttribute('aria-current');
  }
}
addEventListener('scroll', updateNavigation, {passive: true});
addEventListener('resize', updateNavigation);
updateNavigation();

if (matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--pointer-x', event.clientX + 'px');
    document.documentElement.style.setProperty('--pointer-y', event.clientY + 'px');
  }, {passive: true});
}
