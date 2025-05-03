let score=JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};

updateScoreElement();

// document.
//     querySelector('.js-result').innerHTML=result;

// document.
//     querySelector('.js-moves')=`You ${playerMove} - ${computerMove} Computer`;

/*
if (!score)
{score=
    {wins:0,losses:0,ties:0}
;}
*/
// console.log(score);

let isAutoPlaying=false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId= setInterval(function(){
            const playerMove=pickComputerMove();
            playGame(playerMove);
        },2000);
        isAutoPlaying=true;
    }

    else{
        console.log(intervalId);
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
}

function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
    if (playerMove==='scissors'){
        if (computerMove==='rock'){
        result='You lose.';
        }else if (computerMove==='paper'){
            result='You win.';
        }
        else if(computerMove=='scissors'){
            result='Tie.';
        }
    }

    else if(playerMove===`paper`){
        if (computerMove==='rock'){
            result='You win.';
        }else if (computerMove==='paper'){
            result='Tie.';
        }
        else if(computerMove=='scissors'){
            result='You lose.';
        }
    }

    else if(playerMove===`rock`){
        if (computerMove==='rock'){
            result='Tie.';
        }else if (computerMove==='paper'){
            result='You lose.';
        }
        else if(computerMove=='scissors'){
            result='You win.';
        }
    }
    console.log(result);
    if (result=='You win.'){
        score.wins+=1;
    }
    else if (result=='You lose.'){
        score.losses+=1;
    }
    else if (result=='Tie.'){
        score.ties+=1;
        console.log(score.ties);
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    console.log(score);
    document.
        querySelector('.js-result').innerHTML=`${result}`;

    document.
        querySelector('.js-moves').innerHTML=
            `You <img src="/Lesson10-rock-paper-scissor/images/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="/Lesson10-rock-paper-scissor/images/${computerMove}-emoji.png" class="move-icon" alt=""> Computer`;

//     alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${ result}
// Wins:${score.wins}, Losses:${score.losses}, Tie:${score.ties}`);

}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Tie:${score.ties}`;

}

function pickComputerMove(){
    let computerMove='';
    const randomNum= Math.random(); //generate a num i.e 0<=num<=1

    if (randomNum>=0 && randomNum <1/3){
        computerMove='rock';
    } 
    else if(randomNum>=1/3 && randomNum <2/3){
        computerMove='paper';
    }
    else if(randomNum>=2/3 && randomNum <1){
        computerMove='scissors';
    }

    return computerMove
}


