//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

window.onload(() => {
    board = document.getElementById('board');
    board.height = boardHeight;
    board.width = boardWidth;
    board.context = context;
})