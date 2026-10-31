let pr = new Promise(function (aaa, bbb)
{
    setTimeout(() => 
        {
            let rn = Math.floor(Math.random()*10);
            if (rn > 5) aaa("resolved with " + rn);
            else bbb("rejected with " + rn);
        }, 3000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})