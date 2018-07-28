function openModal(myModal) {
    myModal.style.display = 'block';
    document.body.classList.add('noScroll');
}

const overlays = document.querySelectorAll('.overlay');
Array.from(overlays).map(function(overlayElement) {
    overlayElement.addEventListener('click', function(e) {
        const target = e.target;
        const myModal = target.tagName === 'IMG' ? target.parentElement.nextElementSibling : target.nextElementSibling;
        openModal(myModal);
    })
});

function closeModal(myModal) {
    myModal.style.display = 'none';
    document.body.classList.remove('noScroll');
}

const closeCursors = document.querySelectorAll('.close.cursor');
Array.from(closeCursors).map(function(closeCursor) {
    closeCursor.addEventListener('click', function(e) {
        closeModal(e.target.parentElement);
    })
});
