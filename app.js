let userScore=0;
let Compscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscr=document.querySelector("#user");
let compscr=document.querySelector("#comp");


// To get the User Choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    });
});


// To get the computer Choice
const getCompchoice = () => {
    const options=["stone","paper","scissors"]
    let ind=Math.floor(Math.random()*3);
    return options[ind];
}


//To check the computer and user choice to predict the winner
const playgame = (userChoice) => {
    console.log("User Choice is :",userChoice);
    compChoice=getCompchoice();
    console.log("Computer Choice is ",compChoice);
    let userWin=true;
    if(compChoice === userChoice){
        drawMessage();
    }
    else{  
        let userWin=true;      
        if(userChoice=="stone"){
            userWin = ( compChoice=="scissors" ) ? true: false;
        }
        else if(userChoice == "paper"){
            userWin = ( compChoice == "stone" ) ? true : false;
        }
        else{
            userWin = ( compChoice == "paper" ) ? true : false;
        }
        showWinner(userWin);
    }  
}


const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userscr.innerText=userScore;
        console.log("You won");
        msg.innerText="You Won";
        msg.style.backgroundColor="green";
    }    
    else{
        Compscore++;
        compscr.innerText=Compscore;
        console.log("You Lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor="red";
    }

}

const drawMessage=()=>{
    console.log("Game is Drawed");
    msg.innerText = "Game is Drawed";
    msg.style.backgroundColor="black";
}