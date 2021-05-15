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

let index = 0 //randomNumber()
let indexNumber = document.querySelector(".indexNumber");
//let userValue = [];

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
    /* userValue.push(userInput.value); */
    let userdatas = userInput.value;
    if (userdatas) {
      localStorage.setItem(index, JSON.stringify(userdatas));
    }

    for (let i = 0; i < localStorage.length; i++) {
      const user = localStorage.key(i);
    
      /* console.log(localStorage.getItem(user)); */
      showUsersData = localStorage.getItem(user)
      
      
    }

    //checking if users have attempted up to 3 questions, if "yes"? perform action
    if (index === 3) {
      gameContainer.innerHTML = `<div>
      <button class="startbtn shadow-sm" onclick="showAnswer()">See Answer</button>
      <br />
       <button class="shadow-sm btn-success d-flex border mx-auto" onclick="goBackHomeBtn()">Home</button>
      </div>`;
    }
  });
 
}

let showUsersData;

//Showing users collect and wrong answers after game ended
function showAnswer() {
  let showAnswer = questions
    .map(item => {
      let finadata = showUsersData //localStorage.getItem("data");
      return `<div>
    <div class="card mt-2">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.question}</li>
    <li class="list-group-item text-success">correct answer -- ${item.ans}</li>
    <li class="list-group-item">your answer -- ${finadata}</li>
  </ul>
</div>
    </div>`;
    })
    .join("");


  gameContainer.innerHTML = showAnswer; 
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
