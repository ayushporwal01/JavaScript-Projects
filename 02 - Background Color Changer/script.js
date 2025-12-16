const changeBtn = document.getElementById('change-btn');

const hex = '#';

changeBtn.addEventListener('click', (e) => {
    let randomColor = hex + (Math.floor(Math.random() * 6));
    document.body.style.backgroundColor = randomColor;
})