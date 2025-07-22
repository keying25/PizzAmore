const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            { code: "black", img: "./img/Product/air.png" },
            { code: "darkblue", img: "./img/Product/air2.png" },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            { code: "lightgray", img: "./img/Product/jordan.png" },
            { code: "green", img: "./img/Product/jordan2.png" },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            { code: "lightgray", img: "./img/Product/blazer.png" },
            { code: "green", img: "./img/Product/blazer2.png" },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            { code: "black", img: "./img/Product/crater.png" },
            { code: "lightgray", img: "./img/Product/crater2.png" },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            { code: "gray", img: "./img/Product/hippie.png" },
            { code: "black", img: "./img/Product/hippie2.png" },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Slide the product
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change selected product
        choosenProduct = products[index];

        // Update product info
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update color options safely
        currentProductColors.forEach((color, colorIndex) => {
            if (choosenProduct.colors[colorIndex]) {
                color.style.display = "inline-block";
                color.style.backgroundColor = choosenProduct.colors[colorIndex].code;
            } else {
                color.style.display = "none";
            }
        });
    });
});

// Handle color selection
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        if (choosenProduct.colors[index]) {
            currentProductImg.src = choosenProduct.colors[index].img;
        }
    });
});

// Handle size selection
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Payment popup logic
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

if (productButton && payment && close) {
    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
        payment.style.display = "none";
    });
}

// Optional: Close payment form on outside click
window.addEventListener("click", (e) => {
    if (e.target === payment) {
        payment.style.display = "none";
    }
});
