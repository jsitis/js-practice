class CreatePencil {

    constructor(pname, company, price, color)
    {
        this.pname = pname;
        this.company = company;
        this.color = color;
        this.price = price;
    }
    
    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
                elem.remove();
            }
        
        });

    }

    write(text){
        let h1 =  document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    };
}


let p1 = new CreatePencil("Natraj", "Natraj", 12, "red");
let p2 = new CreatePencil("Apsara", "Apsara", 15, "yellow");

