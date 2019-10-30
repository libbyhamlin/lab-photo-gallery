//function dynamically rendering the html string

function renderItems(images) {
    const html = /*html*/`
    <li class="creature-item">
        <div class="info-container">
                <h2>${images.title}</h2>
                <p class="images-type">${images.keyword}</p>
        </div>
        <div class="image-container">
                <img src="${images.url}" alt="${images.title} image">
        </div>
        <p class="num-horns">${images.horns}</p>
        <p class="description">${images.description}</p>
    </li>
    `;
    return html;
}

export default renderItems; 






