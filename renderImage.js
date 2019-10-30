export default function renderItems(images) {
    const html = /*html*/ `
        <li>
        <div class="image-container">
        <h2>${images.title}</h2>
                <img src="${images.url}" title="${images.description}">
            </div>
            <div class="info-container">
                <p class= "number-of-horns">Num of Horns: ${images.horns}</p>
            </div>
        </li>
    `;
    return html;
}
