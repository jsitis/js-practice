let count = 0;
let seconds = 5;
let timtime = 0;
let progress = document.querySelector(".progress-bar");
let percenText = document.querySelector("#percentText");


let tim =  setTimeout(() => {
    document.querySelector("p").style.display = "none";    
}, 3000);

let intv = setInterval(function(){

    if (count <=99) {
        count++;
        progress.style.width = `${count}%`;
        percenText.textContent = `${count}%`;
        
    }
    else {
        document.querySelector("h2").textContent = "Downloaded!";
        clearInterval(intv);
    }
   },(seconds*1000) / 100);