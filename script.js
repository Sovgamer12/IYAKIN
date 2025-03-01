document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
          name: "Nike Air Force 1",
          price: 100,
          img: "air force 1.png",
          category: "Sneakers",
          description: "Introduced in 1982, the Nike Air Force 1 is a timeless basketball shoe known for its simple yet elegant design, featuring a clean white upper and a chunky midsole. It has evolved into a cultural icon embraced by various communities."
        },
        {
          name: "Kanye West x Bapesta 'College Dropout'",
          price: 7000,
          img: "kanye west x bapesta.avif",
          category: "Sneakers",
          description: "A collaboration between Kanye West and BAPE, this Bapesta sneaker features a bear graphic inspired by West's 'The College Dropout' album cover, blending unique design elements with streetwear flair."
        },
        {
          name: "Puma Speedcat OG Red",
          price: 120,
          img: "puma speedcat og red.webp",
          category: "Sneakers",
          description: "Inspired by motorsport racing footwear from the '80s and '90s, the Puma Speedcat OG Red offers a sleek, classic silhouette made from suede and leather, embodying a retro yet trendy aesthetic."
        },
        {
          name: "Fear of God Essentials Hoodie",
          price: 110,
          img: "fear of god essentials.webp",
          category: "Hoodies",
          description: "The Fear of God Essentials Hoodie is crafted from core fleece, featuring a mock neckline, side seam pockets, rib-knit cuffs, and a rubberized 'Essentials' logo on the front, offering both comfort and style."
        },
        {
          name: "Stussy 8 Ball Hoodie",
          price: 69,
          img: "stussy 8 ball.webp",
          category: "Hoodies",
          description: "The Stussy 8 Ball Hoodie showcases the brand's iconic 8-ball graphic, offering a relaxed fit with a drawstring hood and kangaroo pocket, perfect for streetwear enthusiasts seeking comfort and style."
        },
        {
          name: "Chrome Hearts Hoodie",
          price: 1200,
          img: "chrome hearts hoodie.webp",
          category: "Hoodies",
          description: "The Chrome Hearts Hoodie features premium materials and the brand's signature cross motifs, providing a luxurious take on casual wear with a distinctive gothic aesthetic."
        },
        {
          name: "Yamane Evisu Kyoto Roaring Tiger Denim Jacket",
          price: 230,
          img: "yamane evisu kyoto roaring tiger.jpg",
          category: "Denim Jackets",
          description: "This Evisu denim jacket features intricate embroidery of a roaring tiger, blending traditional Japanese artistry with contemporary denim fashion, making it a standout piece."
        },
        {
          name: "Carhartt Denim Jacket",
          price: 220,
          img: "carhartt denim jacket.jpg",
          category: "Denim Jackets",
          description: "Known for durability, the Carhartt Denim Jacket offers a rugged design with reinforced stitching and multiple pockets, suitable for both workwear and casual outfits."
        },
        {
          name: "Levi Strauss 501 Denim Jeans",
          price: 145,
          img: "levi strauss 501.jpg",
          category: "Denim Jeans",
          description: "The Levi's 501 Jeans are a classic straight-leg denim, featuring a button fly and durable construction, representing timeless style and versatility in casual wear."
        },
        {
          name: "JNCO Jorts",
          price: 95,
          img: "jnco.jpg",
          category: "Jorts",
          description: "JNCO Jorts are characterized by their wide-leg design and streetwear appeal, offering a bold fashion statement reminiscent of '90s urban culture."
        },
        {
          name: "True Religion Jorts",
          price: 60,
          img: "true religion.jpg",
          category: "Jorts",
          description: "True Religion Jorts feature the brand's signature stitching and relaxed fit, combining comfort with a distinctive design for casual wear."
        }
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
