let h1 = document.createElement("h1");
let h5 = document.createElement("h3");
let p = document.createElement("p");



let coffee  = {
    color: "dark",
    drink: "gut gut gut"
};


let arabCoffee = Object.create(coffee);
arabCoffee.taste = "bitter";
arabCoffee.name = "Arab Coffee";

h1.textContent = `${arabCoffee.name}`;
h5.textContent = `This coffee is very ${arabCoffee.taste}`;
p.textContent = `But I like its ${arabCoffee.color} color`;

document.body.appendChild(h1);
document.body.appendChild(h5);
document.body.appendChild(p);


