document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Air Force 1", price: 90, img: "air force 1.png" },
        { name: "Kanye West x Bapesta", price: 7000, img: "kanye west x bapesta.avif" },
        { name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp" },
        { name: "Fear of God Essentials", price: 110, img: "fear of god essentials.webp" },
        { name: "Stussy 8 Ball", price: 75, img: "stussy 8 ball.webp" },
        { name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp" },
        { name: "Yamane Evisu Kyoto Roaring Tiger", price: 230, img: "yamane evisu kyoto roaring tiger.jpg" },
        { name: "Carhartt Denim Jacket", price: 220, img: "carhartt denim jacket.jpg" },
        { name: "Levi Strauss 501", price: 145, img: "levi strauss 501.jpg" },
        { name: "JNCO", price: 95, img: "jnco.jpg" },
        { name: "True Religion", price: 60, img: "true religion.jpg" }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});
