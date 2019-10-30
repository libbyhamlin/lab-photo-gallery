import renderItems from 'renderImages.js';
const test = QUnit.test;

test('render images on page', assert => {
  // arrange
    const images = {
        url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
        title: 'Smaug',
        description: "Fan illustration of Smaug from 'The Hobbit'",
        keyword: 'dragon',
        horns: 100
    };

    const expected = /*html*/ `
    <li>
        <div class="image-container">
        <h2>Smaug</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg" title="Fan illustration of Smaug from 'The Hobbit'"> 
        </div>
        <div class="info-container">
            <p class= "number-of-horns">Num of Horns: 100</p>
        </div> 
    </li>
`;

  //act
    const html = renderItems(images);
  //assert
    assert.htmlEqual(html, expected);
});
