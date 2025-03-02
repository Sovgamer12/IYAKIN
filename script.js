document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Air Force 1", price: 90, img: "air force 1.png", stock: 10, description: "Classic Nike Air Force 1 shoes." },
        { name: "Kanye West x Bapesta", price: 7000, img: "kanye west x bapesta.avif", stock: 2, description: "Limited edition Kanye West x Bapesta sneakers." },
        { name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp", stock: 5, description: "Racing-inspired Puma sneakers." }
    ];

    const productList = document.getElementById("product-list");
    const cart = [];
    
    function renderProducts() {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onclick="showModal(${index})">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <button class="add-to-cart" onclick="addToCart(${index})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    // Product Modal
    window.showModal = function (index) {
        const modal = document.getElementById("product-modal");
        document.getElementById("modal-img").src = products[index].img;
        document.getElementById("modal-title").textContent = products[index].name;
        document.getElementById("modal-description").textContent = products[index].description;
        document.getElementById("modal-price").textContent = products[index].price;
        document.getElementById("modal-stock").textContent = products[index].stock;
        document.getElementById("modal-add-to-cart").onclick = () => addToCart(index);
        modal.style.display = "block";
    };

    document.querySelector(".close").onclick = () => {
        document.getElementById("product-modal").style.display = "none";
    };

    // Add to Cart
    window.addToCart = function (index) {
        if (products[index].stock > 0) {
            cart.push(products[index]);
            products[index].stock--;
            document.getElementById("cart-count").textContent = cart.length;
            renderProducts();
        } else {
            alert("Out of stock!");
        }
    };

    // Cart Modal
    document.getElementById("view-cart").onclick = () => {
        const cartModal = document.getElementById("cart-modal");
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total;
        cartModal.style.display = "block";
    };

    document.querySelector(".close-cart").onclick = () => {
        document.getElementById("cart-modal").style.display = "none";
    };

    // Sorting Function
    document.getElementById("sort").onchange = function () {
        const value = this.value;
        if (value === "price-low") {
            products.sort((a, b) => a.price - b.price);
        } else if (value === "price-high") {
            products.sort((a, b) => b.price - a.price);
        }
        renderProducts();
    };

    renderProducts();
});
