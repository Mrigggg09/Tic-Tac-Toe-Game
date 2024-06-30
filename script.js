console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let isgameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    wins = [
        [0,1,2,5,5,0,20],
        [3,4,5,5,15,0,20],
        [6,7,8,5,25,0,20],
        [0,3,6,-5,15,90,20],
        [1,4,7,5,15,90,20],
        [2,5,8,15,15,90,20],
        [0,4,8,0,15,45,30],
        [2,4,6,0,15,135,30]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            if(!isgameover){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width = `${e[6]}vw`;
                gameover.play();
            }
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "30vh";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});

// Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn="X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0px"; 
})