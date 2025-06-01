const products = [
    {
        image: {
            thumbnail: "/assets/product-image-one-unique.jpg",
            mobile: "../assets/product-image-one-radiate.jpg",
            tablet: "../assets/product-image-one-cool.jpg",
            desktop: "../assets/product-image-one.jpg"
        },
        name: "Cartoon Astronout T-Shirt",
        category: "Adidas",
        price: 6.50
    },
    {
        image: {
            thumbnail: "../assets/product-image-two-unique.jpg",
            mobile: "../assets/product-image-two-radiate.jpg",
            tablet: "../assets/product-image-two-cool.jpg",
            desktop: "../assets/product-image-two.jpg"
        },
        name: "Shadow Muse Tee",
        category: "Nike",
        price: 7.00
    },
    {
        image: {
            thumbnail: "../assets/product-image-five-unique.jpg",
            mobile: "../assets/product-image-five-radiate.jpg",
            tablet: "../assets/product-image-five-cool.jpg",
            desktop: "../assets/product-image-five.jpg"
        },
        name: "Air Flex Tee",
        category: "Nike",
        price: 8.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-eight-unique.jpg",
                mobile: "../assets/product-image-eight-radiate.jpg",
                tablet: "../assets/product-image-eight-cool.jpg",
                desktop: "../assets/product-image-eight.jpg"
            },
            "name": "Puma Elite Stretch",
            "category": "Puma",
            "price": 5.50
        },
        {
            image: {
                thumbnail: "../assets/product-image-thirteen-unique.jpg",
                mobile: "../assets/product-image-thirteen-radiate.jpg",
                tablet: "../assets/product-image-thirteen-cool.jpg",
                desktop: "../assets/product-image-thirteen.jpg"
            },
            name: "Classic Gabbana",
            category: "Dolce Gabbana",
            price: 4.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-six-unique.jpg",
                mobile: "../assets/product-image-six-radiate.jpg",
                tablet: "../assets/product-image-six-cool.jpg",
                desktop: "../assets/product-image-six.jpg"
            },
            "name": "Gilt Edge",
            "category": "Adidas",
            "price": 5.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-nine-unique.jpg",
                mobile: "../assets/product-image-nine-radiate.jpg",
                tablet: "../assets/product-image-nine-cool.jpg",
                desktop: "../assets/product-image-nine.jpg"
            },
            name: "Jetstream Tailored",
            category: "Puma",
            price: 4.50
        },
        {
            image: {
                thumbnail: "../assets/product-image-sixteen-unique.jpg",
                mobile: "../assets/product-image-sixteen-radiate.jpg",
                tablet: "../assets/product-image-sixteen-cool.jpg",
                desktop: "../assets/product-image-sixteen.jpg"
            },
            name: "VersaWave",
            category: "Versace",
            price: 4.50
        }
];

const productList = document.querySelector(".product-container");

const productModal = document.querySelector("#product-modal");


products.forEach(product =>{
    const div = document.createElement("div");

    div.classList.add("product-card");

    div.innerHTML = `<div id="card-content">
    
    <img src ="${product.image['desktop']}"/>
    <p>${product.category}</p>
    <h3>${product.name}</h3>
        <div id="price-cart">
            <h3> <Span> <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i><span> <br>$
                            ${product.price}</h3>
            <a href=""#><i class="fas fa-shopping-cart"></i></a>
        </div>
    
    </div>`;

    productList.appendChild(div);

    // Event listener for item/product pop-up

    div.addEventListener("click", ()=>{

        productModal.innerHTML = " ";

        const modalImage = document.createElement("div");

        modalImage.classList.add("modal-images");

        const modalDescription = document.createElement("div");

        modalDescription.classList.add("modal-description");

        const cancelBtn = document.createElement("i");

        cancelBtn.setAttribute("id", "cancel-btn");

        cancelBtn.setAttribute("class", "fa fa-times");

    modalImage.innerHTML = `<img id="main-product-img" src ="${product.image['desktop']}"/>
                <div class="product-colors">
                    <img class="item-color main-product-img" src ="${product.image['desktop']}"/>
                    <img class="item-color mobile" src ="${product.image['mobile']}"/>
                    <img class="item-color tablet" src ="${product.image['tablet']}"/>
                    <img class="item-color thumbnail" src ="${product.image['thumbnail']}"/>
                </div>
                `;

    modalDescription.innerHTML = `<p id="item-category">${product.category}</p>
                            <h3>${product.name}</h3>
                            <h2>$${product.price}</h2>
                            <select value="">
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Small</option>
                            </select><br>
                            <input type="text">
                            <a href="#">Add To Cart</a>
                            <h4>Product Details</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum quae, libero aspernatur accusamus earum. Accusamus libero alias dolores ipsa reprehenderit! Rerum, quam eaque voluptatum aliquam quidem quaerat illum harum?</p>
                            `;

                            productModal.appendChild(modalImage);
                            productModal.appendChild(modalDescription);
                            productModal.appendChild(cancelBtn);

                            productModal.style.display = 'flex';

                            cancelBtn.addEventListener("click", ()=>{
                                productModal.style.display = 'none';
                            
                            });

                            const mainProductImage = document.getElementById("main-product-img");

                            const desktop = document.querySelector(".main-product-img");


                            const mobile = document.querySelector(".mobile");

                            const tablet = document.querySelector(".tablet");

                            const thumbnail = document.querySelector(".thumbnail");

                            desktop.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${product.image['desktop']}`);
                            });


                            mobile.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${product.image['mobile']}`);
                            });

                            tablet.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${product.image['tablet']}`);
                            });

                            thumbnail.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${product.image['thumbnail']}`);
                            });

    });    
});


const newproducts = [
    {
        image: {
            thumbnail: "../assets/product-image-eleven-unique.jpg",
            mobile: "../assets/product-image-eleven-radiate.jpg",
            tablet: "../assets/product-image-eleven-cool.jpg",
            desktop: "../assets/product-image-eleven.jpg"
        },
        name: "Rushline Tracks",
        category: "Nike",
        price: 6.50
    },
    {
        image: {
            thumbnail: "../assets/product-image-fourteen-unique.jpg",
            mobile: "../assets/product-image-fourteen-radiate.jpg",
            tablet: "../assets/product-image-fourteen-cool.jpg",
            desktop: "../assets/product-image-fourteen.jpg"
        },
        name: "Gilt Edge",
        category: "Gucci",
        price: 7.00
    },
    {
        image: {
            thumbnail: "../assets/product-image-fifteen-unique.jpg",
            mobile: "../assets/product-image-fifteen-radiate.jpg",
            tablet: "../assets/product-image-fifteen-cool.jpg",
            desktop: "../assets/product-image-fifteen.jpg"
        },
        name: "Urban Royal",
        category: "Gucci",
        price: 8.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-four-unique.jpg",
            mobile: "../assets/product-image-four-radiate.jpg",
            tablet: "../assets/product-image-four-cool.jpg",
                desktop: "../assets/product-image-four.jpg"
            },
            "name": "Velvet District",
            "category": "Versace",
            "price": 5.50
        },
        {
            image: {
                thumbnail: "../assets/product-image-three-unique.jpg",
            mobile: "../assets/product-image-three-radiate.jpg",
            tablet: "../assets/product-image-three-cool.jpg",
                desktop: "../assets/product-image-three.jpg"
            },
            name: "StreetForge",
            category: "Puma",
            price: 4.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-seven-unique.jpg",
            mobile: "../assets/product-image-seven-radiate.jpg",
            tablet: "../assets/product-image-seven-cool.jpg",
                desktop: "../assets/product-image-seven.jpg"
            },
            "name": "Signature Pulse",
            "category": "Bottega Vanneta",
            "price": 5.00
        },
        {
            image: {
                thumbnail: "../assets/product-image-twelve-unique.jpg",
            mobile: "../assets/product-image-twelve-radiate.jpg",
            tablet: "../assets/product-image-twelve-cool.jpg",
                desktop: "../assets/product-image-twelve.jpg"
            },
            name: "Adidas Reflex",
            category: "Adidas",
            price: 4.50
        },
        {
            image: {
                thumbnail: "../assets/product-image-ten-unique.jpg",
                mobile: "../assets/product-image-ten-radiate.jpg",
                tablet: "../assets/product-image-ten-cool.jpg",
                desktop: "../assets/product-image-ten.jpg"
            },
            name: "Motion Flex Pants",
            category: "Nike",
            price: 4.50
        }
];

const newproductList = document.querySelector(".new-product-container");

const newproductModal = document.querySelector("#product-modal");


newproducts.forEach(newProduct =>{
    const div = document.createElement("div");

    div.classList.add("product-card");

    div.innerHTML = `<div id="card-content">
    
    <img src ="${newProduct.image['desktop']}"/>
    <p>${newProduct.category}</p>
    <h3>${newProduct.name}</h3>
    <div id="price-cart">
        <h3> <Span> <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i><span> <br> $
                            ${newProduct.price}</h3>
            <a href=""#><i class="fas fa-shopping-cart"></i></a>
    </div>
    
    </div>`;

    newproductList.appendChild(div);

    // Event listener for item/product pop-up

    div.addEventListener("click", ()=>{

        newproductModal.innerHTML = " ";

        const modalImage = document.createElement("div");

        modalImage.classList.add("modal-images");

        const modalDescription = document.createElement("div");

        modalDescription.classList.add("modal-description");

        const cancelBtn = document.createElement("i");

        cancelBtn.setAttribute("id", "cancel-btn");

        cancelBtn.setAttribute("class", "fa fa-times");

    modalImage.innerHTML = `<img id="main-product-img" src ="${newProduct.image['desktop']}"/>
                <div class="product-colors">
                    <img class="item-color main-product-img" src ="${newProduct.image['desktop']}"/>
                    <img class="item-color mobile" src ="${newProduct.image['mobile']}"/>
                    <img class="item-color tablet" src ="${newProduct.image['tablet']}"/>
                    <img class="item-color thumbnail" src ="${newProduct.image['thumbnail']}"/>
                </div>
                `;


    modalDescription.innerHTML = `<p id="item-category">${newProduct.category}</p>
                            <h3>${newProduct.name}</h3>
                            <h2>$${newProduct.price}</h2>
                            <select value="">
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Small</option>
                            </select><br>
                            <input type="text">
                            <a href="#">Add To Cart</a>
                            <h4>Product Details</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum quae, libero aspernatur accusamus earum. Accusamus libero alias dolores ipsa reprehenderit! Rerum, quam eaque voluptatum aliquam quidem quaerat illum harum?
                            </p>
                            `;

                            newproductModal.appendChild(modalImage);
                            newproductModal.appendChild(modalDescription);
                            newproductModal.appendChild(cancelBtn);

                            newproductModal.style.display = 'flex';

                            cancelBtn.addEventListener("click", ()=>{
                                newproductModal.style.display = 'none';
                            
                            });

                            const mainProductImage = document.getElementById("main-product-img");

                            const desktop = document.querySelector(".main-product-img");


                            const mobile = document.querySelector(".mobile");

                            const tablet = document.querySelector(".tablet");

                            const thumbnail = document.querySelector(".thumbnail");

                            desktop.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${newProduct.image['desktop']}`);
                            });


                            mobile.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${newProduct.image['mobile']}`);
                            });

                            tablet.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${newProduct.image['tablet']}`);
                            });

                            thumbnail.addEventListener("click", ()=>{
                                mainProductImage.setAttribute("src", `${newProduct.image['thumbnail']}`);
                            });
                        
    });

});







