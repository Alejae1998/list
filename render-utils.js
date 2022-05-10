export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    // div.style.top = animal.top;
    // div.style.left = animal.left;

    const a = document.createElement('a');
    a.href = `./animal-detail/?id=${animal.id}`;
    a.classList.add('anchor');
    const img = document.createElement('img');
    img.src = `../assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.says;

    a.append(img, nameSpan);
    div.append(a);
    return div;
}
