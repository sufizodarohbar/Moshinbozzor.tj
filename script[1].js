
// === Фильтрация объявлений ===
function filterCars() {
    let brand = document.getElementById("filter-brand").value.toLowerCase();
    let year = document.getElementById("filter-year").value;
    let maxPrice = document.getElementById("filter-price").value;

    let cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        let carBrand = car.getAttribute("data-brand").toLowerCase();
        let carYear = car.getAttribute("data-year");
        let carPrice = parseInt(car.getAttribute("data-price"));

        let show = true;

        if (brand && carBrand !== brand) show = false;
        if (year && carYear !== year) show = false;
        if (maxPrice && carPrice > maxPrice) show = false;

        car.style.display = show ? "block" : "none";
    });
}

// === Добавление нового объявления ===
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-car-form").addEventListener("submit", function(e) {
        e.preventDefault();

        let brand = document.getElementById("brand").value;
        let model = document.getElementById("model").value;
        let year = document.getElementById("year").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("image").value;

        let carList = document.querySelector(".cars");

        let newCar = document.createElement("div");
        newCar.classList.add("car-card");
        newCar.setAttribute("data-brand", brand);
        newCar.setAttribute("data-year", year);
        newCar.setAttribute("data-price", price);

        newCar.innerHTML = `
            <img src="${image}" alt="${brand} ${model}">
            <div class="car-info">
                <h3>${brand} ${model}</h3>
                <p>Год: ${year}</p>
                <p>Цена: ${price} $</p>
            </div>
        `;

        carList.appendChild(newCar);

        // Очистка формы
        document.getElementById("add-car-form").reset();
    });
});
