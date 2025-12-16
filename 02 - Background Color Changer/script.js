const changeBtn = document.getElementById('change-btn');

const hex = '#';

//change on button click
changeBtn.addEventListener('click', (e) => {
    let randomColor = "#" + (Math.random().toString(16).slice(2, 8));
    document.body.style.backgroundColor = randomColor;
})

// change automatically
setInterval((e) => {
    let randomColor = "#" + (Math.random().toString(16).slice(2, 8));
    document.body.style.backgroundColor = randomColor;
}, 1000);