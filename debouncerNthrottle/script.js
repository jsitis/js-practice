let input = document.querySelector("input");

function debounce(fnc, delay){
    let timer;
    return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
        fnc(...args);
    }, delay);

    }    
}

function throttle(fnc, delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if (now - timer >= delay){
            timer = now;
            fnc(...args);
        }

    };  
}

input.addEventListener("input", debounce(function(){
    console.log("debounce");
},1000));

input.addEventListener("input", throttle(function(){
    console.log("throttle");
},1000));