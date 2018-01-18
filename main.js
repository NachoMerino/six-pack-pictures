$(document).ready(() => {

  $('main').css(('margin-top'), $('.navbar').outerHeight() + 10);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function loadPicts(rndNum) {

    $.getJSON('https://picsum.photos/list', (pictures) => {
      const objPictures = pictures;
      $.each(objPictures, (index, picture) => {
        if (index > rndNum && index < rndNum + 7) {
          $('.row').append(`<div class="col-sm col-lg-4">
          <div class="card">
            <img class="card-img-top" src="https://picsum.photos/${picture.filename}" alt="${picture.filename}">
            <div class="card-body">
              <h5 class="card-title">Author: ${picture.author}</h5>
            </div>
          </div>
        </div>`)
        }

      });

    });
  }
  const rnd = getRandomInt(300, 700);
  loadPicts(rnd);
  $('#reload').click(((e) => {
    e.preventDefault();
    $('.row').empty();
    const randomNumber = getRandomInt(300, 700);
    loadPicts(randomNumber);
  }));

});
