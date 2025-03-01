document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Air Force 1", price: 90, img: "air force 1.png", desc: "Classic Nike Air Force 1 sneakers." },
        { name: "Kanye West x Bapesta", price: 7000, img: "kanye west x bapesta.avif", desc: "Limited edition Kanye West Bapesta shoes." },
        { name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp", desc: "Iconic Puma Speedcat motorsport shoes." },
        { name: "Fear of God Essentials", price: 110, img: "fear of god essentials.webp", desc: "Fear of God Essentials sweatshirt." },
        { name: "Stussy 8 Ball", price: 75, img: "stussy 8 ball.webp", desc: "Stussy classic 8 ball design tee." },
        { name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp", desc: "Luxury Chrome Hearts hoodie." },
    ];

    let cart = [];
    const productList = document.getElementById("product-list");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");
    const sortSelect = document.getElementById("sort");

    // MODAL ELEMENTS
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <img id="modal-img" src="" alt="">
        <h2 id="modal-name"></h2>
        <p id="modal-desc"></p>
        <button id="close-modal">Close</button>
    `;
    document.body.appendChild(modal);
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalDesc = document.getElementById("modal-desc");
    const closeModal = document.getElementById("close-modal");

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;

            productCard.addEventListener("click", () => openModal(index));
            productCard.querySelector(".add-to-cart").addEventListener("click", (e) => {
                e.stopPropagation();
                addToCart(product);
                productCard.classList.add("clicked");
                setTimeout(() => productCard.classList.remove("clicked"), 150);
            });

            productList.appendChild(productCard);
        });
    }

    function openModal(index) {
        modal.style.display = "block";
        modalImg.src = products[index].img;
        modalName.textContent = products[index].name;
        modalDesc.textContent = products[index].desc;
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

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
            cartItem.innerHTML = `${product.name} - $${product.price} <button class="remove" data-index="${index}">Remove</button>`;
            cartList.appendChild(cartItem);
        });
        cartTotal.innerText = `Total: $${total}`;
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", (e) => removeFromCart(e.target.dataset.index));
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    sortSelect.addEventListener("change", renderProducts);
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        updateCart();
    });

    renderProducts();
});
