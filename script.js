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
    else if (num === 0){
    number.style.color = "black";
}
    
    
})
reset.addEventListener("click", function(){  
    reduc = reduc - reduc;
    number.innerHTML = reduc;
    if(reduc === reduc-reduc){
        number.style.color = "black";
    }
})
increase.addEventListener("click", function(){  
    reduc += 1 ;
    number.innerHTML = reduc;
    if(reduc > 0){
        number.style.color = "green";
    }
    else if (num === 0){
    number.style.color = "black";
}
})
