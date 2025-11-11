// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import {questions} from "./data.js"
//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll(".ans") // кнопки відповідей
let qw_text = document.querySelector(".qw") // текст запитання

// функція відображення запитання
let div_img = document.querySelector(".img")
let img = div_img.querySelector("img")
let qw = ""
let answer = []
let can_click = true
function showQuestion(){
    // отримуємо поточне запитання
     qw = questions[q_index]
    // відображаємо текст запитання
        qw_text.innerHTML = qw.qw

    // тасуємо відповіді
    let ans = shuffle(qw.ans)
        ans = shuffle(ans)
    // тасуємо копію масиву відповідей

   // відображаємо відповіді на кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].innerHTML = ans[i]
   }

    
}
//відображаємо перше запитання
showQuestion()

// обробники кліків по кнопках відповідей
for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].addEventListener("click", function(){
        if (can_click){
            can_click = false
        let ans = btn_ans[i].innerHTML
        answer.push(ans)
        if (ans == qw.correct){
            console.log("ok")
            score++
        }
        else{
            console.log("no")
        }
     // Обертання коліс
// Визначаємо спільну тривалість
const animTime = 3000;

// Запускаємо всі анімації одночасно
Promise.all([
  anime({
    targets: ".koleso",
    rotate: 360,
    duration: animTime,
    easing: "linear"
  }).finished,

  anime({
    targets: ".vuhlop",
    left: "-500px",
    top: "-300px",
    scale: 5,
    duration: animTime,
    easing: "easeOutSine"
  }).finished,

  anime({
    targets: ".img",
    translateX: "250%",
    duration: animTime,
    easing: "easeInOutSine"
  }).finished
])
.then(() => {
  // --- Усі три анімації закінчилися одночасно ---

  q_index++;
  if (q_index === questions.length) {
    answer = answer.join("/");
    document.cookie = `answers=${answer}; max-age=${60*60*60}`;
    document.cookie = `score=${score}; max-age=86400`;
    document.cookie = `total=${questions.length}; max-age=86400`;
    window.location.replace("result.html");
    return;
  }

  // Показуємо нове питання
  anime({
    targets:".card-qw",
    opacity:0,
    duration:3000
  }).finished.then(function(){
  showQuestion();})

  // Їде далі і повертається назад
  return anime({
    targets: ".img",
    translateX: ["150%", "0%"],
    duration: animTime,
    easing: "easeInOutSine"
  }).finished;
})
.then(() => {
  // Скидаємо позиції та стилі
  const vuhlop = document.querySelector(".vuhlop");
  vuhlop.style.transform = "scale(1)";
  vuhlop.style.left = "-250px";
  vuhlop.style.top = "-200px";
  document.querySelectorAll(".koleso").forEach(k => k.style.transform = "rotate(0deg)");

  can_click = true;
    anime({
    targets:".card-qw",
    opacity:1,
    duration:3000
  })
});
}})
   }
//1. отримуємо всі кнопки відповідей у циклі
//2. додаємо обробник кліку на кожну кнопку
//3. у обробнику перевіряємо чи правильна відповідь
//4. змінюємо змінну-колір  (зелений - правильна, червоний - неправильна) та рахунок
//5. запускаємо анімацію зміни кольору кнопки
//6. після завершення анімації збільшуємо індекс запитання
//7. якщо запитання закінчилися - переходимо на сторінку результатів та 
//   зберігаємо у cookie кількість правильних відповідей та загальну кількість запитань,
//  інакше показуємо наступне запитання
