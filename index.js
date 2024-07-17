const read = document.querySelector(".q2")
let notification = 3;
const dot = document.querySelector(".q1")
dot.textContent= notification
read.addEventListener("click", function(){
    notification = 0;
    dot.textContent= notification
    mark.style.backgroundColor = "white"
    gray.style.backgroundColor = "white"
    jacob.style.backgroundColor = "white"
    dot.style.display = "none"
})

const mark =document.querySelector(".div-flex1")
mark.addEventListener("click", function(){
    if(notification == 2){
        notification = 2;
        dot.textContent = notification
    }
    if (notification == 1){
        notification = 1
        not.textContent = notification
    }
    
    else{
        notification -=1;
        dot.textContent = notification
    }
    mark.style.backgroundColor = "white"
})

const gray =document.querySelector(".div-flex2")
gray.addEventListener("click", function(){
    if(notification == 0){
        notification = 0;
        dot.textContent = notification
    }
    if (notification == 1){
        notification = 1
        not.textContent = notification
    }
    
    else{
        notification -=1;
        dot.textContent = notification
    }
    gray.style.backgroundColor = "white"
})

const jacob =document.querySelector(".div-flex3")
jacob.addEventListener("click", function(){
    if(notification == 0){
        notification = 0;
        dot.textContent = notification
    }
    if (notification == 0){
        notification = 0
        not.textContent = notification
    }
    
    else{
        notification -=0;
        dot.textContent = notification
    }
    jacob.style.backgroundColor = "white"
     dot.style.display = "none"
})