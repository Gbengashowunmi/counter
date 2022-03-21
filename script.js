let number = document.getElementById("number");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");


let reduc = 0;
decrease.addEventListener("click", function(){  
    reduc -= 1 ;
    number.innerHTML = reduc;
    if(reduc < 0){
        number.style.color = "red";
    }
    
})
reset.addEventListener("click", function(){  
    number.innerHTML = reduc - reduc;
    if(reduc = 0){
        number.style.color = "red";
    }
})
increase.addEventListener("click", function(){  
    reduc += 1 ;
    number.innerHTML = reduc;
    if(reduc > 0){
        number.style.color = "green";
    }
})