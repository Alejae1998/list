import { animals } from '../animal-detail/data.js';
import { renderListItem } from './utils.js';

const main = document.querySelector('main');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    main.append(animalDiv);
}
