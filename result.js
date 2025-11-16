




// розбиваємо куки на масив елементів
// перебираємо елементи
// розбиваємо елемент на ключ і значення
// якщо ключ - score, записуємо значення в змінну score
// якщо ключ - total, записуємо значення в змінну total
let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
let answers = []
let stat = document.querySelector('.stats')
for(let i = 0; i<cookie.length; i++){
    let[name,value] = cookie [i].split('=')
    if(name.trim() == 'score'){
        score.innerHTML=value
    }
    if(name.trim() =='total'){
        total.innerHTML = value
    }
    if (name.trim() == 'answers'){
        answers = value.split('/')
    }
}
import { questions } from "./data.js"
for (let i=0; i<questions.length; i++){
    let cols = []
    for (let g=0; g<4; g++){
        if (questions[i].ans[g]==questions[i].correct){
            cols.push('linear-gradient(135deg, #38e146ff, #8ad67bff);')
        }
        else {
            cols.push("linear-gradient(135deg, #8369b6, #b04ba5);")
        }
        if (answers[i].trim()==questions[i].ans[g] && answers[i].trim() != questions[i].correct)
            cols[g]= "linear-gradient(135deg, #ea6161ff, #dca2afff);"
    }
    stat.innerHTML+=`<div class = "card-qw">
      <div class=" qw">${questions[i].qw}</div>
      <div class="answers">
        <div class="ans" style = "background : ${cols[0]}">${questions[i].ans[0]}</div>
        <div class="ans"style ="background : ${cols[1]}">${questions[i].ans[1]}</div>
        <div class="ans"style = "background : ${cols[2]}">${questions[i].ans[2]}</div>
        <div class="ans"style = "background : ${cols[3]}">${questions[i].ans[3]}</div>
      </div>
    </div>`
}
// підключаємось до події завантаження сторінки для анімації результату
window.onload = function(){
    // відображаємо результат у відповідні елементи
    

    // анімація результату


    // анімація кількості запитань

            // анімація кількості правильних відповідей по завершенню анімації total

}
let restart = document.querySelector(".restart")
restart.addEventListener("click", function(){
        anime({
        targets: restart,
        scale: [2,1,2,1,2,1],
        color:["#D12300", "#FFBB29"],
        rotate: 360,
        duration:5000,
        
    }).finished.then(function(){
        window.location.replace("test.html")
    })
})