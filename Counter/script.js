function zonadderare(zoner) {
    trips = localStorage.getItem("trips");
    money = parseInt(localStorage.getItem("money"))
    if (trips == null) {
        console.log("Should go here")
        trips = 0;
        money = 0;
    }
    trips ++;
    money += (18 * zoner)
    document.getElementById("trips").textContent = trips;
    document.getElementById("money").textContent = money;
    localStorage.setItem("trips", trips);
    localStorage.setItem("money", money);
}

function reset() {
    document.getElementById("trips").textContent = 0;
    document.getElementById("money").textContent = 0;
    localStorage.setItem("trips", 0);
    localStorage.setItem("money", 0);
}