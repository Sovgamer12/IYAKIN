document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Nike Air Force 1", price: 90, img: "air force 1.png", category: "Sneakers", description: "A classic basketball sneaker from 1982, known for its clean white design and versatility." },
        { id: 2, name: "Kanye West x Bapesta 'College Dropout'", price: 7000, img: "kanye west x bapesta.avif", category: "Sneakers", description: "Limited-edition sneaker featuring Kanye's 'College Dropout' bear logo, a collab with BAPE." },
        { id: 3, name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp", category: "Sneakers", description: "Inspired by motorsports, this sneaker offers a sleek and stylish low-profile design." },
        { id: 4, name: "Fear of God Essentials Hoodie", price: 110, img: "fear of god essentials.webp", category: "Hoodie", description: "Minimalist hoodie with premium cotton fabric, part of Fear of God’s streetwear collection." },
        { id: 5, name: "Stussy 8 Ball Hoodie", price: 75, img: "stussy 8 ball.webp", category: "Hoodie", description: "Signature hoodie featuring Stussy's iconic 8-ball graphic on the back." },
        { id: 6, name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp", category: "Hoodie", description: "Luxury streetwear piece with bold Chrome Hearts gothic-style branding." },
        { id: 7, name: "Yamane Evisu Kyoto Roaring Tiger", price: 230, img: "yamane evisu kyoto roaring tiger.jpg", category: "Denim Jacket", description: "Hand-painted Evisu denim jacket featuring the Kyoto Roaring Tiger design." },
        { id: 8, name: "Carhartt Denim Jacket", price: 220, img: "carhartt denim jacket.jpg", category: "Denim Jacket", description: "Durable workwear-inspired denim jacket, perfect for rugged and casual wear." },
        { id: 9, name: "Levi Strauss 501 Denim Jacket", price: 145, img: "levi strauss 501.jpg", category: "Denim Jacket", description: "A timeless Levi’s jacket featuring the classic 501 design with premium denim." },
        { id: 10, name: "JNCO Wide-Leg Jorts", price: 95, img: "jnco.jpg", category: "Jorts", description: "Baggy Y2K-style jorts, bringing back the 90s skater aesthetic." },
        { id: 11, name: "True Religion Jorts", price: 60, img: "true religion.jpg", category: "Jorts", description: "Denim jorts with the signature True Religion stitching and premium craftsmanship." }
    ];

    const productList = document.getElementById("product-list");
    const sortSelect = document.getElementById("sort-select");

    function displayProducts(productsToShow) {
        productList.innerHTML = "";
        productsToShow.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="view-details" data-id="${product.id}">View Details</button>
            `;
            productList.appendChild(productCard);
        });
    }

    function sortProducts(option) {
        let sortedProducts = [...products];

        if (option === "price-low") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === "price-high") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        displayProducts(sortedProducts);
    }

    sortSelect.addEventListener("change", (event) => {
        sortProducts(event.target.value);
    });

    productList.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-details")) {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            if (product) {
                alert(`Product: ${product.name}\nCategory: ${product.category}\nPrice: $${product.price}\nDescription: ${product.description}`);
            }
        }
    });

    displayProducts(products);
});
