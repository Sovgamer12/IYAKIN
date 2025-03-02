document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Air Force 1", price: 90, img: "air force 1.png", stock: 10 },
        { name: "Kanye West x Bapesta", price: 7000, img: "kanye west x bapesta.avif", stock: 3 },
        { name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp", stock: 0 },
        { name: "Fear of God Essentials", price: 110, img: "fear of god essentials.webp", stock: 6 },
        { name: "Stussy 8 Ball", price: 75, img: "stussy 8 ball.webp", stock: 1 },
        { name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp", stock: 2 },
        { name: "Yamane Evisu Kyoto Roaring Tiger", price: 230, img: "yamane evisu kyoto roaring tiger.jpg", stock: 5 },
        { name: "Carhartt Denim Jacket", price: 220, img: "carhartt denim jacket.jpg", stock: 8 },
        { name: "Levi Strauss 501", price: 145, img: "levi strauss 501.jpg", stock: 0 },
        { name: "JNCO", price: 95, img: "jnco.jpg", stock: 4 },
        { name: "True Religion", price: 60, img: "true religion.jpg", stock: 6 }
    ];

    const productList = document.getElementById("product-list");

    if (!productList) {
        console.error("Error: #product-list not found.");
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        let stockStatus = "";
        let stockClass = "";
        if (product.stock > 5) {
            stockStatus = "✅ In Stock";
            stockClass = "stock-in";
        } else if (product.stock > 0) {
            stockStatus = "⚠️ Limited Stock";
            stockClass = "stock-limited";
        } else {
            stockStatus = "❌ Out of Stock";
            stockClass = "stock-out";
        }

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <p class="stock-status ${stockClass}">${stockStatus}</p>
            <button class="add-to-cart" ${product.stock === 0 ? "disabled" : ""}>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
});
