


const startBtn = document.querySelector(".startBtn");
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const container = document.querySelector(".container");
const startPage = document.querySelector(".start-names");
const playerOneName = document.querySelector(".player1-name");
const playerTwoName = document.querySelector(".player2-name");
const switchBox = document.querySelector(".switch-box");
const switchPLayer = document.querySelector(".switch-player");
const resultPlayerOne = document.querySelector(".res-1-player");
const resultPlayerTwo = document.querySelector(".res-2-player");
const boxes = document.querySelectorAll(".row>div");
const changeColor = document.querySelector(".changeColor");
const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const draw = document.querySelector(".draw");

let namePlayerOne = "";
let namePlayerTwo = "";
let board = [
    ["","",""],
    ["","",""],
    ["","",""]
];
let playerOneActive = true;
let playerTwoActive = false;
let gameFinished = false;

changeColor.addEventListener("click", ()=>{
    container.classList.toggle("light");
    changeColor.classList.toggle("rotate");
})

startBtn.addEventListener("click", () => {
    namePlayerOne = inputOne.value;
    namePlayerTwo = inputTwo.value;
    container.style.display = "flex";
    startPage.style.display = "none";
    playerOneName.innerHTML = namePlayerOne;
    playerTwoName.innerHTML = namePlayerTwo;
    switchPLayer.innerHTML = namePlayerOne;
    resultPlayerOne.innerHTML = 0;
    resultPlayerTwo.innerHTML = 0;
})

boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        if(playerOneActive === true && gameFinished === false && !box.classList.contains("filled")){
            let newEl = document.createElement("i");
            newEl.classList.add("fa-solid", "fa-x", "x");
            box.appendChild(newEl);
            box.classList.add("filled");
            playerOneActive = false;
            playerTwoActive = true;
            switchPLayer.innerHTML = namePlayerTwo;
            switchBox.style.left = "";
            switchBox.style.right = "2px";
            if(box.dataset.o === "00"){
                board[0][0] = "X";
            }else if(box.dataset.o === "01"){
                board[0][1] = "X";
            }else if(box.dataset.o === "02"){
                board[0][2] = "X";
            }else if(box.dataset.o === "10"){
                board[1][0] = "X";
            }else if(box.dataset.o === "11"){
                board[1][1] = "X";
            }else if(box.dataset.o === "12"){
                board[1][2] = "X";
            }else if(box.dataset.o === "20"){
                board[2][0] = "X";
            }else if(box.dataset.o === "21"){
                board[2][1] = "X";
            }else if(box.dataset.o === "22"){
                board[2][2] = "X";
            }
            checkWinner();
        }else if(playerTwoActive === true && gameFinished === false && !box.classList.contains("filled")){
            let newEl2 = document.createElement("i");
            newEl2.classList.add("fa-regular", "fa-circle", "circle");
            box.appendChild(newEl2);
            box.classList.add("filled");
            playerTwoActive = false;
            playerOneActive = true;
            switchPLayer.innerHTML = namePlayerOne;
            switchBox.style.marginLeft = "2px";
            switchBox.style.right = "";
            if(box.dataset.o === "00"){
                board[0][0] = "O";
                console.log(board);
            }else if(box.dataset.o === "01"){
                board[0][1] = "O";
                console.log(board);
            }else if(box.dataset.o === "02"){
                board[0][2] = "O";
                console.log(board);
            }else if(box.dataset.o === "10"){
                board[1][0] = "O";
                console.log(board);
            }else if(box.dataset.o === "11"){
                board[1][1] = "O";
                console.log(board);
            }else if(box.dataset.o === "12"){
                board[1][2] = "O";
                console.log(board);
            }else if(box.dataset.o === "20"){
                board[2][0] = "O";
                console.log(board);
            }else if(box.dataset.o === "21"){
                board[2][1] = "O";
                console.log(board);
            }else if(box.dataset.o === "22"){
                board[2][2] = "O";
                console.log(board);
            }
            checkWinner();
        }
    })
})

function checkWinner(){
    /*CHECKING X*/ 
    /*rows check*/

    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    /*colums check*/    
    } else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    /*diagonals check*/    
    } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
        icon.style.color = "#ffe59d";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerOne.innerHTML++;
    /*CHECKING O*/
    /*rows check*/     
    } else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    /*colums check*/     
    } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    /*diagonals check*/    
    } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon2.style.color = "#a7a7a743";
        },400)
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("filled");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        resultPlayerTwo.innerHTML++;
    }
    /*draw check*/
    const boxesArray = Array.from(boxes);
    if(boxesArray.every(box => box.classList.contains("filled"))){
        icon.style.color = "#ffe59d";
        draw.style.opacity = "1";
        icon2.style.color = "#68b284";
        setTimeout(()=>{
            icon.style.color = "#a7a7a743";
            draw.style.opacity = "0";
            icon2.style.color = "#a7a7a743";
        },500)
        boxes.forEach(box =>{
            box.innerHTML = "";
            box.classList.remove("filled");
        })
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }
}