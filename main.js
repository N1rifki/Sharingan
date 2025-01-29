const sharingan = document.querySelector('.sharingan');
const sharinganSound = document.getElementById('sharingan-sound');

sharingan.addEventListener('mouseover', () => {
    sharingan.querySelector('.pattern').style.animation = 'spin 1s linear infinite';
    sharinganSound.play();
});

sharingan.addEventListener('mouseout', () => {
    sharingan.querySelector('.pattern').style.animation = '';
    sharinganSound.pause();
    sharinganSound.currentTime = 0;
});