let timeo = Math.floor(Math.random()*10);


function waitKaro(fnc){
   setTimeout(fnc, timeo*1000); 
}

waitKaro(function(){
    console.log(`chl gya mai ${timeo} seconds k baad`);
});