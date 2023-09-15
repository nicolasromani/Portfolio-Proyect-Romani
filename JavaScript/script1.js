const btnCierra = document.querySelector('#closeMark');
const overLabel = document.querySelector('.over-label__lateral-bar'); 

btnCierra.addEventListener('click', () => {
    overLabel.style.transform = 'translateX(-100%)';
    overLabel.style.transition = '400ms ease-in-out';
});