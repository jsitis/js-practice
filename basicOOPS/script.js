function CreatePencil (name, color, company, price){
    this.name = name;
    this.color = color;
    this.company = company;
    this.price = price;
        
    }

CreatePencil.prototype.write = function(text){ //this is a prototype
        let h1 =  document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
};


let pencil1 = new CreatePencil("Natraj", "red", "Natraj", "12");
let pencil2 = new CreatePencil("Apsara", "yellow", "Apsara", "15");

