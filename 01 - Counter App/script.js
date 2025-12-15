let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');

let currValue = counter.value;

incrementBtn.addEventListener('click', (e) => {
    currValue += 1;
    counter.value = currValue;
})

decrementBtn.addEventListener('click', (e) => {
    if(currValue > 0) {
       currValue -= 1;
       counter.value = currValue;
    }
})

