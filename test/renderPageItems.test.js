import renderItems from '../renderPageItems.js';
const test = QUnit.test;

test('render image to display', assert => {
    const images = {
        url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
        title: 'Smaug',
        description: "Fan illustration of Smaug from 'The Hobbit'",
        keyword: 'dragon',
        horns: 100
    };

    const expected = /*html*/ `
    <li class="creature-item">
        <div class="info-container">
                <h2>Smaug</h2>
                <p class="images-type">dragon</p>
        </div>
        <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg" alt="Smaug image">
        </div>
        <p class="num-horns">100</p>
        <p class="description">Fan illustration of Smaug from 'The Hobbit'</p>
    </li>
    `;

  // act
    const html = renderItems(images);

  // assert
    assert.htmlEqual(html, expected);
});
