document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging check

    // Get elements
    const sortDropdown = document.getElementById("sort-select");
    const productContainer = document.getElementById("product-list");

    if (!sortDropdown || !productContainer) {
        console.error("Sort dropdown or product list not found!");
        return; // Exit script if elements are missing
    }

    // Product data
    let products = [
        { id: 1, name: "Air Force 1", price: 90, category: "sneakers", img: "air force 1.png" },
        { id: 2, name: "Kanye West x Bapesta", price: 7000, category: "sneakers", img: "kanye west x bapesta.avif" },
        { id: 3, name: "Puma Speedcat OG Red", price: 80, category: "sneakers", img: "puma speedcat og red.webp" },
        { id: 4, name: "Fear of God Essentials", price: 110, category: "hoodie", img: "fear of god essentials.webp" },
        { id: 5, name: "Stussy 8 Ball", price: 75, category: "hoodie", img: "stussy 8 ball.webp" },
        { id: 6, name: "Chrome Hearts Hoodie", price: 1200, category: "hoodie", img: "chrome hearts hoodie.webp" },
        { id: 7, name: "Yamane Evisu Kyoto Roaring Tiger", price: 230, category: "denim jacket", img: "yamane evisu kyoto roaring tiger.jpg" },
        { id: 8, name: "Carhartt Denim Jacket", price: 220, category: "denim jacket", img: "carhartt denim jacket.jpg" },
        { id: 9, name: "Levi Strauss 501", price: 145, category: "denim jacket", img: "levi strauss 501.jpg" },
        { id: 10, name: "JNCO", price: 95, category: "jorts", img: "jnco.jpg" },
        { id: 11, name: "True Religion", price: 60, category: "jorts", img: "true religion.jpg" }
    ];

    // Function to display products
    function displayProducts() {
        productContainer.innerHTML = ""; // Clear container
        products.forEach(product => {
            let productHTML = `
                <div class="product">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productContainer.innerHTML += productHTML;
        });

        // Add event listeners after rendering
        document.querySelectorAll(".view-details").forEach(button => {
            button.addEventListener("click", showProductDetails);
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
    }

    // Sort products when dropdown changes
    sortDropdown.addEventListener("change", function () {
        let sortValue = this.value;

        if (sortValue === "price-low") {
            products.sort((a, b) => a.price - b.price);
        } else if (sortValue === "price-high") {
            products.sort((a, b) => b.price - a.price);
        }

        displayProducts();
    });

    // Show product details in a popup
    function showProductDetails(event) {
        let productId = event.target.getAttribute("data-id");
        let product = products.find(p => p.id == productId);

        if (product) {
            alert(`🔍 ${product.name}\n📌 Category: ${product.category}\n💰 Price: $${product.price}`);
        }
    }

    // Add to cart functionality (basic version)
    function addToCart(event) {
        let productId = event.target.getAttribute("data-id");
        let product = products.find(p => p.id == productId);

        if (product) {
            alert(`🛒 Added ${product.name} to cart!`);
        }
    }

    // Initial product display
    displayProducts();
});