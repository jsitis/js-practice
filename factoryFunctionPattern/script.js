function createProduct(name, price){

    let stock = 10;

    return {
        name,
        price,

        checkStock(){
            console.log(stock);
        },

        buy(qty){
            if (qty < stock){
                stock -= qty;
                console.log(`you bought ${qty} pieces - ${stock} pieces left.`);
            }
            else{
                console.error(`We only have ${stock} pieces.`);
            }
        },

        refill(qty){
            stock += qty;
            console.log(`Stock refilled ${stock} quantity now.`);
        }
    }
}

let iphone = createProduct("iphone", 150000);
let frooti = createProduct("frooti", 15);
