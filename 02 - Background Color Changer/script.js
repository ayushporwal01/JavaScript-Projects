const changeBtn = document.getElementById('change-btn');

const hex = '#';

changeBtn.addEventListener('click', (e) => {
    let randomColor = "#" + (Math.random().toString(16).slice(2, 8));
    document.body.style.backgroundColor = randomColor;
})