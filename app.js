import renderItems from './renderPageItems.js';
import images from '../data/images.js';
import htmlToDom from './src/html-to-dom.js';

const itemListDOM = document.querySelector('.creatures');
const itemTypeFilter = document.querySelector('.creature-type-filter');

function render(images) {
  //remove any existing list items
    while (itemListDOM.lastElementChild) {
        itemListDOM.lastElementChild.remove();
    }

  // Render new list
    images.forEach(image => {
        const html = renderItems(image);
        const convertedToDom = htmlToDom(html);
        itemListDOM.appendChild(convertedToDom);
    });
}

render(images);

itemTypeFilter.addEventListener('change', () => {
    const filter = itemTypeFilter.value;
    let itemFiltered = null;

    if (!filter) {
        itemFiltered = images;
    } else {
        itemFiltered = images.filter(images => {
            return images.keyword === filter;
        });
    }

    render(itemFiltered);
});

