let count = 0;

let progress = document.querySelector(".progress-bar");
let percentageText = document.querySelector(".percentageText")


let intv = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        percentageText.textContent = `${count}%`
    }else{
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(intv);
    }
},(5*1000)/100);