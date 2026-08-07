export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const [imageCell, textCell] = row.children;

    imageCell.className = 'team-image';
    textCell.className = 'team-text';

    // first line = name, second line = role
    const lines = textCell.querySelectorAll('p');
    if (lines[0]) lines[0].className = 'team-name';
    if (lines[1]) lines[1].className = 'team-role';

    li.append(imageCell, textCell);
    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}