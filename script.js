document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Air Force 1", price: 110, img: "air force 1.png" },
        { name: "Kanye West x Bapesta", price: 3000, img: "kanye west x bapesta.avif" },
        { name: "Puma Speedcat OG Red", price: 120, img: "puma speedcat og red.webp" },
        { name: "Fear of God Essentials", price: 100, img: "fear of god essentials.webp" },
        { name: "Stussy 8 Ball", price: 99, img: "stussy 8 ball.webp" },
        { name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp" },
        { name: "Yamane Evisu Kyoto Roaring Tiger", price: 330, img: "yamane evisu kyoto roaring tiger.jpg" },
        { name: "Carhartt Denim Jacket", price: 220, img: "carhartt denim jacket.jpg" },
        { name: "Levi Strauss 501", price: 501, img: "levi strauss 501.jpg" },
        { name: "JNCO", price: 120, img: "jnco.jpg" },
        { name: "True Religion", price: 99, img: "true religion.jpg" }
    ];

    let cart = [];
    const productList = document.getElementById("product-list");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");
    const buyNowBtn = document.getElementById("buy-now");
    const sortSelect = document.getElementById("sort");
    const homeSection = document.getElementById("home-section");
    const productsSection = document.getElementById("products-section");
    const cartSection = document.getElementById("cart-section");
    const homeLink = document.getElementById("home-link");
    const productsLink = document.getElementById("products-link");
    const cartLink = document.getElementById("cart-link");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    function renderProducts(productsArray, container) {
        container.innerHTML = "";
        productsArray.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productCard.querySelector(".add-to-cart").addEventListener("click", () => addToCart(product));
            container.appendChild(productCard);
        });
    }

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((product, index) => {
            total += product.price;
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                ${product.name} - $${product.price}
                <button class="remove" data-index="${index}">Remove</button>
            `;
            cartList.appendChild(cartItem);
        });

        cartTotal.innerText = `Total: $${total}`;
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", (e) => {
                removeFromCart(e.target.dataset.index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function sortProducts() {
        const sortType = sortSelect.value;
        if (sortType === "low-to-high") {
            products.sort((a, b) => a.price - b.price);
        } else if (sortType === "high-to-low") {
            products.sort((a, b) => b.price - a.price);
        }
        renderProducts(products, productList);
    }

    function toggleSection(sectionToShow) {
        homeSection.classList.add("hidden");
        productsSection.classList.add("hidden");
        cartSection.classList.add("hidden");
        sectionToShow.classList.remove("hidden");
    }

    function searchItems() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts, searchResults);
    }

    sortSelect.addEventListener("change", sortProducts);
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        updateCart();
    });
    buyNowBtn.addEventListener("click", () => {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
        toggleSection(homeSection);
    });
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSection(homeSection);
    });
    productsLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSection(productsSection);
    });
    cartLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSection(cartSection);
    });
    searchButton.addEventListener("click", searchItems);
    searchInput.addEventListener("input", searchItems);

    renderProducts(products, productList);
});