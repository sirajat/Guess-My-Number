
// console.log(document.querySelector(".message").textContent);
// 


// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;
// document.querySelector(".highscore").textContent = 23

let randomNumber = Math.floor(Math.random()*20)+1

console.log(randomNumber);
let score = 20

document.querySelector(".check").addEventListener('click' , function(){
    
    let guess = Number(document.querySelector(".guess").value);
    if (!guess){
    document.querySelector(".message").textContent = "No Number ⛔⛔⛔"
    }else if (guess === randomNumber){
        document.querySelector(".message").textContent = "Congratulation You Win 🏆🏆"
        document.querySelector(".highscore").textContent = score
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").textContent = randomNumber
    } else if (guess > randomNumber) {
        if (score > 0) {
              document.querySelector(".message").textContent = "Too high 💹💹";
              score = score - 1;
              document.querySelector(".score").textContent = score; 
        } else {
             document.querySelector(".message").textContent = "You Loosed";
        }
     
    } else if (guess < randomNumber) {
        if (score > 0) {
          document.querySelector(".message").textContent = "Too Short 📈📈";
          score = score - 1;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "You Loosed";
        }
       
    }

    
})

document.querySelector(".again").addEventListener('click', function(){
    document.querySelector(".score").textContent = 20
    randomNumber = Math.floor(Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start Guessing....";
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""

})
