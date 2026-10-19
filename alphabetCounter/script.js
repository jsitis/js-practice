let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){

    let typ = 20 - inp.value.length;
    span.textContent = typ;
    if (typ < 0) {
        span.style.color = "red";
        inp.style.color = "red";
    } else {
        span.style.color = "white";
        inp.style.color = "white";
    }

})