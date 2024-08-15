console.log("Welcome to Vipin's created Tic Tac Toe game")
let music = new Audio("groove.mp3")
let yourturn = new Audio("ting.mp3")
let  gameover = new Audio("gameover.mp3")
let turn = "x";
let isgameover = false;

// funtion to change the turn

const changeTurn = ()=>{
    return turn  === "x"? "O": "x"

}

// function to check for win
const checkwin = ()=>{
   let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2 ,  5, 5, 0],
        [3, 4, 5 ,  5, 15, 0],
        [6, 7, 8 ,  5, 25, 0],
        [0, 3, 6 , -5, 15, 90],
        [1, 4, 7 ,  5, 15, 90],
        [2, 5, 8 ,  15, 15, 90],
        [0, 4, 8 ,  5, 15, 45 ],
        [2, 4, 6 ,   5, 15, 135 ],
       
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true;
            gameover.play();
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width= "20vw"
        }
    })

}



// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
           turn = changeTurn();
          yourturn.play();
          music.play()
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }

        }
    })
})



// Add onClick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        turn = "x";
        isgameover = false
        document.querySelector('.line').style.width= "0vw";
        if (music.paused) {
            music.play();
        }else{
            music.currentTime = 0
            music.pause()
        }

        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"
        
    })
})



function vipin() {
    console.log("This is a project which made by vipin mishra, this game is made with use of html css and  javascript which is user interactive")
}