//function dynamically rendering the html string

// function renderItems(creatures) {
export default function generateCreatureItemHtmlString() {
    const html = /*html*/ `
    <li class="creature-item">
        <div class="info-container">
                <h2>${creatures.title}</h2>
                <p class="images-type">${creatures.keyword}</p>
        </div>
        <div class="image-container">
                <img src="${creatures.url}" alt="${creatures.title} image">
        </div>
        <p class="num-horns">${creatures.horns}</p>
        <p class="description">${creatures.description}</p>
    </li>
    `;
    return html;
}

// export default renderItems;
