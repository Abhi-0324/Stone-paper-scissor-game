const handoptions ={
   "rock": "assets/Rock.png",
   "Scissors": "assets/Scissors.png ",
   "paper": " assets/Paper.png"
}
let SCORE =0;
const pickuserhand =(hand) =>{
    

    let user = document.querySelector(".user");
    user.style.display="none";

    let contest =document.querySelector(".contest");
    contest.style.display="flex";

    document.getElementById("userPickImage").src= handoptions[hand];
    let cpHand= pickcomphand();
    umpire(hand,cpHand);
}

const pickcomphand = () =>{
    let hands = ["rock","Scissors","paper"];
    let cpHand = hands[Math.floor(Math.random()*hands.length)];
    console.log(cpHand);
    document.getElementById("compPickImage").src=handoptions[cpHand];
    return cpHand;
   
}

const umpire =(userHand,cpHand ) =>{
    if (userHand == "paper" && cpHand == "Scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "Scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "Scissors" && cpHand == "Scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "Scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "Scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
    };
    
    const setDecision = (decision) => {
        document.querySelector(".decision h1").innerText = decision;
      }
      
      const setScore = (newScore) => {
        SCORE = newScore;
        document.querySelector(".score h1").innerText = newScore;
      }

   const restartGame=()=>{
    let user = document.querySelector(".user");
    user.style.display="flex";

    let contest =document.querySelector(".contest");
    contest.style.display="none";

   }
