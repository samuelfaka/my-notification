const mark = document.querySelector(".q2")
let notification = 3;
const not = document.querySelector(".q1")
not.textContent = notification
mark.addEventListener("click", function(){
    notification = 0
    not.textContent = notification
    markwebber.style.backgroundColor = "white"
    anjela.style.backgroundColor = "white"
    jacob.style.backgroundColor = "white"
    not.style.display = "none"
})
const markwebber = document.querySelector(".div-flex1")
markwebber.addEventListener("click", function(){
    if (notification == 2){
        notification = 2
        not.textContent = notification
    }
    else{
        notification -= 1
        not.textContent = notification
    }
    markwebber.style.backgroundColor = "white"
})
const anjela = document.querySelector(".div-flex2")
anjela.addEventListener("click", function(){
    if(notification <= 0){
        notification = 0
    }    
    if (notification == 1){
        notification = 1
        not.textContent = notification
    }
    else{
        notification -= 1
        not.textContent = notification
    }
    anjela.style.backgroundColor = "white"
})
const jacob = document.querySelector(".div-flex3")
jacob.addEventListener("click", function(){
    if(notification <= 0){
        notification = 0
    }    
    if (notification == 0){
        notification = 0
        not.textContent = notification
    }
    else{
        notification -= 1
        not.textContent = notification
    }
    jacob.style.backgroundColor = "white"
})


