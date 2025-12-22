let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
           box.innerText = "O";
           turnO = false;
        } else {
           box.innerText = "X";
           turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const checkWinner = () => {
    let winnerFound = false;

    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                winnerFound = true;
                setTimeout(() => {
                    alert(`Congratulations, Winner is ${pos1Val}`);
                    disableBoxes();
                }, 50);
                return; 
            }
        }
    }
    
    if (!winnerFound) {
        setTimeout(() => {
            alert("OOPS its a Draw!");
            disableBoxes();
        }, 50);
    }
   
}

resetBtn.addEventListener("click", resetGame);





