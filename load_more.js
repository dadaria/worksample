const loadButton = document.getElementById('load-more');

loadButton.addEventListener('click', function() {
    let text = 'LOAD MORE WORK';
    let moreImages = document.getElementsByClassName('more-images');

    if (loadButton.textContent === text) {
        text = 'LOAD LESS';
        moreImages.animate({height: 'show'}, 500);
    }
    else {
        moreImages.animate({height: 'hide'}, 500);
    }

    loadButton.textContent = text;
    Array.from(moreImages).map(function(value) {
        if (value.style.display === '') {
            value.style.display = 'block';
        }
        else {
            value.style.display = '';
        }
    });
});

