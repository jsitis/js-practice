let pr = new Promise(function (aaa, bbb)
{
    setTimeout(() => 
        {
            let rn = Math.floor(Math.random()*10);
            if (rn > 5) aaa("resolved with " + rn);
            else bbb("rejected with " + rn);
        }, 1000);
});

async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch (err) {
        console.log(err);
    }
}

abcd();