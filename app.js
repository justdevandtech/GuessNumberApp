const userInput = document.getElementById("userinput");
const checkBtn = document.getElementById("submitbtn");
const result = document.getElementById("result");
const closePopper = document.getElementById("closebtn");
const popper = document.querySelector(".popper-layer");
const displayquestion = document.getElementById("displayquestion");
const startbtn = document.querySelector(".startbtn");
const gameProps = document.querySelector(".game-props");
const showTime = document.querySelector(".timeShow");
const gameContainer = document.querySelector(".game-container");

let count = 0;
let interVal; //setinterval declaration

function countTime() {
  count++
  showTime.innerHTML = `T: ${count}`;

  if (index == 3 || index === 3) {
    clearInterval(interVal);
    gameContainer.innerHTML = `<div>
      <button class="startbtn shadow-sm" onclick="showAnswer()">See Answer</button>
      <br />
       <button class="shadow-sm btn-success d-flex border mx-auto" onclick="goBackHomeBtn()">Home</button>
      </div>`;
  }
  
}

//start btn when users first enter the app
startbtn.addEventListener("click", () => {
  let confirmToStartGame = confirm("Your time start now");

  if (confirmToStartGame) {
    gameProps.classList.add("active");
    startbtn.style.display = "none";

 interVal = setInterval(() => {  
      countTime();
        if (count == 13 || count === 13) {
          index++;
          count = 0;
          indexNumber.innerHTML = `Q: ${index}`;
          displayquestion.innerHTML = questions[index].question;
        }
    }, 1000);
    
  }

});

//Questions
const questions = [
  {
    id: 1,
    question: "Who was the only British Prime Minister to be assassinated?",
    ans: "Spencer Perceval",
  },
  {
    id: 2,
    question: "Who is Donald Trump's vice president?",
    ans: "Mike Pence",
  },
  {
    id: 3,
    question: "What is the capital of Westeros in Game of Thrones?",
    ans: "King’s Landing",
  },
  {
    id: 4,
    question:
      "In what year was the first episode of Coronation Street broadcasted on ITV?",
    ans: "1960",
  },
];
let index = 0 //randomNumber()
let indexNumber = document.querySelector(".indexNumber");
let userValue = [];

let data = localStorage/* .setItem("data", JSON.stringify(userValue)); */

//App functionality start here
function gameApp() {
  displayquestion.innerHTML = questions[index].question;
  indexNumber.innerHTML = index;

  //check to see if user input == to question correct answer to perform action
  checkBtn.addEventListener("click", () => {
    index++;
    indexNumber.innerHTML = index;
    displayquestion.innerHTML = questions[index].question;

    //collecting users value and set it to localstorage
    userValue.push(userInput.value);
    data.setItem("data", JSON.stringify(userValue));

    //checking if users have attempted up to 3 questions, if "yes"? perform action
    if (index === 3) {
      console.log("yes");
      gameContainer.innerHTML = `<div>
      <button class="startbtn shadow-sm" onclick="showAnswer()">See Answer</button>
      <br />
       <button class="shadow-sm btn-success d-flex border mx-auto" onclick="goBackHomeBtn()">Home</button>
      </div>`;
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  
  gameApp()//calling App functionality after browser DOM loaded completely
})

//Back btn functionality
function goBackHomeBtn() {
  gameContainer.innerHTML = `<h4 class="text-center">Relax while we ride you home...</h4>`;
  setTimeout(() => {
    location.reload();
  }, 3000);
  
}

//Showing users collect and wrong answers after game ended
function showAnswer() {
  let finadata = JSON.parse(localStorage.getItem("data")).join(" ")
  
  gameContainer.innerHTML = `${finadata} <br />
  <button class="shadow-sm btn-success d-flex mx-auto border" onclick="goBackHomeBtn()">Home</button>
  `;
   console.log("show answer");
}

/* function randomNumber() {
  return Math.floor(Math.random() * questions.length);
}
 */


/* checkBtn.addEventListener("click", () => {
  if (userInput.value.length == 0) {
    popper.classList.add("active");
    result.textContent =
      "You didn't type in anything right? Please type in something to process";
  } else if (userInput.value == questions[index].ans) {
console.log("yesss");
popper.classList.add("active");
result.textContent = `${userInput.value} is correct 👏👏👏👏The correct answer at this moment is ${questions[index].ans}
    `;
closePopper.innerText = "Play Again";
closePopper.style.color = "black";
userInput.value = "";

  } else {
     popper.classList.add("active");
     result.textContent = `${userInput.value}  is wrong! please try again ❌🤦‍♂️❌🤦‍♂️The correct answer at this moment is ${questions[index].ans}
    `;
     userInput.value = "";
  }
}); */

/* closePopper.addEventListener("click", () => {
  popper.classList.remove("active");
  if ((result.textContent = userInput.value + " is correct 👏👏👏👏")) {
    location.reload(); 
  }
}); */
