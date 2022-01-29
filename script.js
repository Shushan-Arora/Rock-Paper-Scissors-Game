  let userChoice = 0;
        let computerChoice = 0;
        let userScore = 0;
        let computerScore = 0;

       function RockChosen(){
         document.getElementById("userIcon").innerHTML=("✊");
         userChoice = 0;
         computerChoice = generateComputerIcon();
         gameCalculation();
       }
       function PaperChosen(){
         document.getElementById("userIcon").innerHTML=("✋");
         userChoice = 1;
         computerChoice = generateComputerIcon();
         gameCalculation();
       }
       function ScissorsChosen(){
         document.getElementById("userIcon").innerHTML=("✌");
         userChoice = 2;
         computerChoice = generateComputerIcon();
         gameCalculation();
       }
       function gameCalculation(){
        if(userChoice == computerChoice){
            document.getElementById("scoreResults").innerHTML=("It's A Tie!");
            document.getElementById("fadeOut").innerHTML=("");
        }else if(userChoice == 0 && computerChoice == 2){
            document.getElementById("scoreResults").innerHTML=("You Win!")
            document.getElementById("fadeOut").innerHTML=("Rock Crushes Scissors!");
            userScore = userScore + 1;
            document.getElementById("userScore").innerHTML=(userScore);
        }else if(userChoice == 1 && computerChoice == 0){
            document.getElementById("scoreResults").innerHTML=("You Win!")
            document.getElementById("fadeOut").innerHTML=("Paper Folds Rock!");
            userScore = userScore + 1;
            document.getElementById("userScore").innerHTML=(userScore);
        }else if(userChoice == 2 && computerChoice == 1){
            document.getElementById("scoreResults").innerHTML=("You Win!")
            document.getElementById("fadeOut").innerHTML=("Scissors Cuts Through Paper!");
            userScore = userScore + 1;
            document.getElementById("userScore").innerHTML=(userScore);
        }else {
            document.getElementById("scoreResults").innerHTML=("Computer Wins!")
            document.getElementById("fadeOut").innerHTML=("");
            computerScore = computerScore + 1;
            document.getElementById("computerScore").innerHTML=(computerScore);
        }
        if(userScore >= 5){

        }
       

       }
       function generateComputerIcon(){
           //0 = rock, 1=paper, 2=scissors
           let ranNo = Math.trunc(Math.random() * 3);
           document.querySelector("#computerIcon").textContent = ranNo; 
           if(ranNo == 0){
            document.getElementById("computerIcon").innerHTML=("✊");
           }
           if(ranNo == 1){
            document.getElementById("computerIcon").innerHTML=("✋");
           }
           if(ranNo == 2){
            document.getElementById("computerIcon").innerHTML=("✌");
           }
           return ranNo;
       }
