let users = [
    {
        name: "Amisha Rathore",
        pic: "https://images.unsplash.com/photo-1792361447680-bcba60f995d6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Silent choas in the wild world | not for everyone",
    },
    {
        name: "Riya Sharma",
        pic: "https://plus.unsplash.com/premium_photo-1792461562954-202131475150?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Coffee first, plans later | chasing sunsets",
    },
    {
        name: "Kabir Malhotra",
        pic: "https://images.unsplash.com/photo-1792345133439-af3ea293f30b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Quiet mind, loud playlists | always on the move",
    },
    {
        name: "Arjun Verma",
        pic: "https://images.unsplash.com/photo-1792346883940-55c0efc1d254?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Making memories, not excuses | 24/7 foodie",
    },
    {
        name: "Tanya Singh",
        pic: "https://images.unsplash.com/photo-1792459405915-b5818b9559c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Soft heart, sharp mind | wanderlust in progress",
    },
    {
        name: "Vihaan Mehta",
        pic: "https://images.unsplash.com/photo-1791320109105-6e61efc8cd51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Less talk, more vibes | camera roll full of clouds",
    },
    {
        name: "Ishita Joshi",
        pic: "https://plus.unsplash.com/premium_photo-1792005033667-e6e1e9e2b796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "Born to stand out | fueled by chai and chaos",
    },
];

function showUsers(arr){

    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage= user.pic;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");
const cardsContainer = document.querySelector(".cards");

inp.addEventListener("input", function () {
    let newUsers = users.filter(function (user) {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    cardsContainer.innerHTML = "";

    if (newUsers.length === 0) {
        const noUsersFound = document.createElement("p");
        noUsersFound.textContent = "No User Found !!";
        noUsersFound.style.color = "red";
        cardsContainer.appendChild(noUsersFound);
    } else {
        showUsers(newUsers);
    }
});