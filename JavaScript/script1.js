const btnCierra = document.querySelector('#closeMark');
const btnOpen = document.querySelector('#openMark')
const overLabel = document.querySelector('.over-label__lateral-bar'); 

btnOpen.addEventListener('click', () => {
    overLabel.style.transform = 'translateX(100%)';
    overLabel.style.transition = '500ms ease-in-out';
});

btnCierra.addEventListener('click', () => {
    overLabel.style.transform = 'translateX(-100%)';
    overLabel.style.transition = '500ms ease-in-out';
});