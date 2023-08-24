const minutesE1 = document.querySelector('#minutes')
const secondsE1 = document.querySelector('#seconds')
const milisecondsE1 = document.querySelector('#miliseconds')
const startbtn = document.querySelector('#startbtn')
const pausebtn = document.querySelector('#pausetbtn')
const resumebtn = document.querySelector('#resumebtn')
const resetbtn = document.querySelector('#resetbtn')

let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", pauseTimer)
resumebtn.addEventListener("click", resumeTimer)
resetbtn.addEventListener("click", resetTimer)

function startTimer(){

    interval = setInterval(()=>{
        if(!isPaused){
            miliseconds += 10;

            if(miliseconds === 1000){
                seconds ++;
                miliseconds = 0;
            }
            if(seconds === 60){
                minutes ++;
                seconds = 0;
            }

            minutesE1.textContent = formatTime(minutes)
            secondsE1.textContent = formatTime(seconds)
            milisecondsE1.textContent = formatMiliseconds(miliseconds)
        }
    }, 10)

    startbtn.style.display = "none"
    pausebtn.style.display = "block"

}

function pauseTimer(){
    isPaused = true
    pausebtn.style.display = "none"
    resumebtn.style.display = "block"
}

function resumeTimer(){
    isPaused = false
    pausebtn.style.display = "block"
    resumebtn.style.display = "none"
}

function resetTimer(){
    clearInterval(interval)

    isPaused = false

    minutes = 0
    seconds = 0
    miliseconds = 0

    minutesE1.textContent = "00"
    secondsE1.textContent = "00"
    milisecondsE1.textContent = "000"

    startbtn.style.display = "block"
    pausebtn.style.display = "none"
    resumebtn.style.display = "none"

}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time){
    return time < 100 ? `${time}`  .padStart(3, "0"): time
}