document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");

    items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let autoSwap;

    function showItem(index) {
        items.forEach((item, idx) => {
            if (idx === currentIndex) {
                item.classList.add("fade-out");
            } else {
                item.classList.remove("fade-in");
                item.classList.remove("fade-out");
            }
        });

        setTimeout(() => {
            items.forEach((item, idx) => {
                item.classList.remove("active", "fade-in", "fade-out");
                dots[idx].classList.remove("active");
                if (idx === index) {
                    item.classList.add("active");
                    item.classList.add("fade-in");
                    dots[idx].classList.add("active");
                }
            });
        }, 500); // Dit is de duur van de fade-out, gelijk aan de helft van de overgangstijd
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function startAutoSwap() {
        autoSwap = setInterval(nextItem, 3000);
    }

    function stopAutoSwap() {
        clearInterval(autoSwap);
    }

    carousel.addEventListener("click", () => {
        stopAutoSwap();
        nextItem();
        startAutoSwap();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        stopAutoSwap();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        startAutoSwap();
    });

    document.querySelector(".next").addEventListener("click", () => {
        stopAutoSwap();
        nextItem();
        startAutoSwap();
    });

    startAutoSwap(); // Start automatic image swap
});
