
// твій код
//знайти кнопку старту
let btn_start = document.querySelector(".btn-start")
btn_start.addEventListener("click", function(){
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
    anime({
        targets: btn_start,
        scale: [2,1,2,1,2,1],
        color:["#D12300", "#FFBB29"],
        rotate: 360,
        duration:5000,
        
    }).finished.then(function(){
        window.location.replace("test.html")
    })
})
//


