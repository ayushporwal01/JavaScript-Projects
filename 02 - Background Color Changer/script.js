const changeBtn = document.getElementById('change-btn');

const hex = '#';
let hexColor = hex + (Math.floor(Math.random() * 6));

changeBtn.addEventListener('click', (e) => {
    document.body.style.backgroundColor = randomColor;
})