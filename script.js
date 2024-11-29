const h=document.getElementById("h1");
const guess=document.getElementById("guess");
const check=document.getElementById("submit");
const attempt=document.getElementById("attempt");
const score=document.getElementById("score");
const num=document.getElementById("h2");
let count=0
let score1=0
function checkNum(){
    const randomNumber=Math.round(Math.random()*10)
    count+=1
    attempt.textContent=`Total Attempts:${count}`
    h.textContent=`The generated number is:${randomNumber}`
    num.textContent=`Your Guess:${guess.value}`
    if(randomNumber==guess.value){
        window.alert
        score1+=1  
    }
    score.textContent=`Your score:${score1}`
}