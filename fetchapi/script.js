function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) =>
    {
            document.querySelector(".users").innerHTML = "";
            data.results.forEach(function(user)
        {

            console.log(user);
            // 1. Elements banao
            const card = document.createElement("div");
            card.className =
            "w-full max-w-sm rounded-2xl bg-slate-900 p-8 text-center shadow-lg shadow-black/30";

            const img = document.createElement("img");
            img.className =
            "mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-indigo-400/20";
            img.src = user.picture.large;
            img.alt = "User's Profile picture";

            const name = document.createElement("h1");
            name.className = "mt-5 text-2xl font-semibold text-white";
            name.textContent = `${user.name.first} ${user.name.last}` ;

            const email = document.createElement("p");
            email.className = "mt-1 text-sm text-slate-400";
            email.textContent = user.email;

            const badge = document.createElement("div");
            badge.className =
            "mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-3 py-1.5 text-sm font-medium text-emerald-300";

            const dot = document.createElement("span");
            dot.className = "h-2 w-2 rounded-full bg-emerald-500";
            dot.setAttribute("aria-hidden", "true");

            // 2. Badge ke andar dot + text daalo
            badge.append(dot, "Active");

            // 3. Sab kuch card ke andar daalo
            card.append(img, name, email, badge);

            // 4. Card ko page par lagao
            document.querySelector(".users").append(card);
        });
    });
}

getUsers();

document.querySelector("#refreshBtn").addEventListener("click", function(){
    getUsers();
});
