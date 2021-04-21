var userInput = document.getElementById('userinput');
var checkBtn = document.getElementById('submitbtn'); 
var result = document.getElementById('result'); 
var closePopper = document.getElementById('closebtn'); 
var popper = document.querySelector('.popper-layer');

const secretNumber = Math.floor(Math.random() * 6 + 2);
checkBtn.addEventListener('click', ()=>{
    if (userInput.value.length == 0) {
        popper.classList.add("active");
        result.textContent = "You didn't type in anything right? Please type in somthing to process";
    }else if (userInput.value != secretNumber) {
    popper.classList.add("active");
    result.textContent = `${userInput.value}  is wrong! please try again ❌🤦‍♂️❌🤦‍♂️The correct answer at this moment is ${secretNumber}
    ` 
    userInput.value = "";
}else{
    console.log('yesss');
    popper.classList.add("active");
    result.textContent = `${userInput.value} is correct 👏👏👏👏The correct answer at this moment is ${secretNumber}
    ` 
    closePopper.innerText = "Play Again"
    closePopper.style.color = "black"
    userInput.value = "";
}
});


closePopper.addEventListener('click', ()=>{
    popper.classList.remove("active");
    if (result.textContent = userInput.value + " is correct 👏👏👏👏") {
        location.reload();
    }
})
