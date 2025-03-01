document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Air Force 1", price: 90, img: "air force 1.png", description: "Classic white sneakers with a timeless design." },
        { id: 2, name: "Kanye West x Bapesta", price: 7000, img: "kanye west x bapesta.avif", description: "Limited-edition sneakers from Kanye West’s collaboration with Bape." },
        { id: 3, name: "Puma Speedcat OG Red", price: 80, img: "puma speedcat og red.webp", description: "Sleek and stylish motorsport-inspired sneakers." },
        { id: 4, name: "Fear of God Essentials", price: 110, img: "fear of god essentials.webp", description: "High-quality oversized hoodie with a minimalist design." },
        { id: 5, name: "Stussy 8 Ball", price: 75, img: "stussy 8 ball.webp", description: "Signature hoodie with the iconic 8-ball logo." },
        { id: 6, name: "Chrome Hearts Hoodie", price: 1200, img: "chrome hearts hoodie.webp", description: "Luxury streetwear hoodie with gothic-inspired design." },
        { id: 7, name: "Yamane Evisu Kyoto Roaring Tiger", price: 230, img: "yamane evisu kyoto roaring tiger.jpg", description: "Premium Japanese denim jacket featuring embroidered tiger artwork." },
        { id: 8, name: "Carhartt Denim Jacket", price: 220, img: "carhartt denim jacket.jpg", description: "Durable and stylish denim jacket for casual wear." },
        { id: 9, name: "Levi Strauss 501", price: 145, img: "levi strauss 501.jpg", description: "Iconic straight-leg denim jeans from Levi’s." },
        { id: 10, name: "JNCO", price: 95, img: "jnco.jpg", description: "Throwback baggy jorts from the '90s era." },
        { id: 11, name: "True Religion", price: 60, img: "true religion.jpg", description: "Classic jorts with signature stitching from True Religion." }
    ];

    const productList = document.getElementById("product-list");
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");
    const addToCartBtn = document.getElementById("add-to-cart");
    const closeModal = document.querySelector(".close");

    // Render products
    function displayProducts(productArray) {
        productList.innerHTML = "";
        productArray.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="view-details" data-id="${product.id}">View Details</button>
            `;
            productList.appendChild(productCard);
        });
    }

    // Show modal with product details
    productList.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-details")) {
            const productId = e.target.dataset.id;
            const product = products.find(p => p.id == productId);
            if (product) {
                modalImg.src = product.img;
                modalTitle.textContent = product.name;
                modalDescription.textContent = product.description;
                modalPrice.textContent = `$${product.price}`;
                addToCartBtn.dataset.id = product.id;
                modal.style.display = "block";
            }
        }
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Sort products by price
    document.getElementById("sort").addEventListener("change", function () {
        const sortBy = this.value;
        if (sortBy === "low-to-high") {
            displayProducts([...products].sort((a, b) => a.price - b.price));
        } else if (sortBy === "high-to-low") {
            displayProducts([...products].sort((a, b) => b.price - a.price));
        }
    });

    // Initialize product display
    displayProducts(products);
});