let addBtn = document.querySelector(".add-btn")
let subBtn = document.querySelector(".sub-btn")
let multBtn = document.querySelector(".mult-btn")
let divBtn = document.querySelector(".div-btn")
let min = 1
let max = 10
let level = document.querySelector(".change-diff")
let stats = document.querySelector(".stats")
let reset = document.querySelector(".reset")
let corr = 0
let miss = 0
addBtn.onclick = function () {
    let numbFirst =getRandomInt(min,max)
    let numbSecond =getRandomInt(min,max)
    
    let correctAnswer = numbFirst + numbSecond

    let userAnswer = prompt(numbFirst + " + " + numbSecond + "=?")
    checkAnswer(userAnswer, correctAnswer);
}
subBtn.onclick = function () {
    let numbFirst = getRandomInt(min,max)
    let numbSecond =getRandomInt(min,max)
    
    let correctAnswer = numbFirst - numbSecond
    let userAnswer = prompt(numbFirst + " - " + numbSecond + "=?")
    checkAnswer(userAnswer, correctAnswer);
}
multBtn.onclick = function () {
    let numbFirst = getRandomInt(min,max)
    let numbSecond =getRandomInt(min,max)
      
    let correctAnswer = numbFirst * numbSecond
    let userAnswer = prompt(numbFirst + " * " + numbSecond + "=?")
    checkAnswer(userAnswer, correctAnswer);
}
divBtn.onclick = function () {
    let numbFirst = getRandomInt(min,max)
    let numbSecond = getRandomInt(min,max)
   
    let correctAnswer = Math.round(numbFirst / numbSecond)
    alert("при делении числа округляются по правилам математики, ответ нужно округлить до целого")
    let userAnswer = prompt(numbFirst + " / " + numbSecond + "=?")
    checkAnswer(userAnswer, correctAnswer);
}
level.onchange = function () {
    // if (level.value == "easy"){
    //     min = 1
    //     max = 9
    // }
    // if (level.value == "medium"){
    //     min = 10
    //     max = 99
    // }
    // if (level.value == "hard"){
    //     min = 100
    //     max = 999
    // }
    // if (level.value == "random"){
    //     min = 1
    //     max = 10000
    // }
    switch (level.value){
        case "easy": {
            min = 1
            max = 9
            break
        }
        case "medium": {
            min = 10
            max = 99
            break
        }
        case "hard": {
            min = 100
            max = 999
            break
        }
        default : {
            min = 1
            max = 10000
            break
        }
    }

}
stats.onclick = function() {
    alert("верных: " + corr + "\nневерных: " + miss)
}
reset.onclick = function() {
    corr = 0
    miss = 0
    alert("Статистика сброшена")
}
function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1))+ min
}
function checkAnswer(user, correct) {
    if (user == correct) {
        alert("верно");
        // corr = corr + 1
        // corr+=1
        corr++
    }
    else {
       alert("ответ неверный. правильный ответ: "+ correct);
       miss++
    }
}


// function test(text) {
//     console.log(text);
// }
// test("123");
// test("hello")
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2,5));



// console.dir(addBtn)






















