document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
          name: "Nike Air Force 1",
          price: 110,
          img: "air force 1.png",
          category: "Sneakers",
          description: "Introduced in 1982, the Nike Air Force 1 is a timeless basketball shoe known for its simple yet elegant design, featuring a clean white upper and a chunky midsole. It has evolved into a cultural icon embraced by various communities."
        },
        {
          name: "Kanye West x Bapesta 'College Dropout'",
          price: 3000,
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
          price: 100,
          img: "fear of god essentials.webp",
          category: "Hoodies",
          description: "The Fear of God Essentials Hoodie is crafted from core fleece, featuring a mock neckline, side seam pockets, rib-knit cuffs, and a rubberized 'Essentials' logo on the front, offering both comfort and style."
        },
        {
          name: "Stussy 8 Ball Hoodie",
          price: 99,
          img: "stussy 8 ball.webp",
          category: "Hoodies",
          description: "The Stussy 8 Ball Hoodie showcases the brand's iconic 8-ball graphic, offering a relaxed fit with a drawstring hood and kangaroo pocket, perfect for streetwear enthusiasts seeking comfort and style."
        },
        {
          name: "Chrome Hearts Hoodie",
          price: 1400,
          img: "chrome hearts hoodie.webp",
          category: "Hoodies",
          description: "The Chrome Hearts Hoodie features premium materials and the brand's signature cross motifs, providing a luxurious take on casual wear with a distinctive gothic aesthetic."
        },
        {
          name: "Yamane Evisu Kyoto Roaring Tiger Denim Jacket",
          price: 330,
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
          price: 115,
          img: "jnco.jpg",
          category: "Jorts",
          description: "JNCO Jorts are characterized by their wide-leg design and streetwear appeal, offering a bold fashion statement reminiscent of '90s urban culture."
        },
        {
          name: "True Religion Jorts",
          price: 110,
          img: "true religion.jpg",
          category: "Jorts",
          description: "True Religion Jorts feature the brand's signature stitching and relaxed fit, combining comfort with a distinctive design for casual wear."
        }
      ];      

    const productList = document.getElementById("product-list");
    const modal = document.getElementById("product-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
            cartList.appendChild(cartItem);
        });

        cartTotal.innerText = `Total: $${total}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    window.removeFromCart = removeFromCart;

    items.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="view-details">View Details</button>
            <button class="add-to-cart">Add to Cart</button>
        `;

        productCard.querySelector(".view-details").addEventListener("click", () => {
            modal.style.display = "block";
            modalContent.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" class="modal-image">
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Size:</strong> ${product.size}</p>
                <p><strong>Color:</strong> ${product.color}</p>
                <p><strong>Material:</strong> ${product.material}</p>
                <button id="close-modal-btn">Close</button>
            `;

            document.getElementById("close-modal-btn").addEventListener("click", () => {
                modal.style.display = "none";
            });
        });

        productCard.querySelector(".add-to-cart").addEventListener("click", () => {
            cart.push(product);
            updateCart();
        });

        productList.appendChild(productCard);
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
