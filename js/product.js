const products = [
    {
        image: {
            thumbnail: "../assets/image-waffle-thumbnail.jpg",
            mobile: "../assets/image-waffle-mobile.jpg",
            tablet: "../assets/image-waffle-tablet.jpg",
            desktop: "./assets/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
        image: {
            thumbnail: "./assets/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/image-creme-brulee-mobile.jpg",
            tablet: "./assets/image-creme-brulee-tablet.jpg",
            desktop: "./assets/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    {
        image: {
            thumbnail: "./assets/image-macaron-thumbnail.jpg",
            mobile: "./assets/image-macaron-mobile.jpg",
            tablet: "./assets/image-macaron-tablet.jpg",
            desktop: "./assets/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
        },
        {
            image: {
                thumbnail: "./assets/image-tiramisu-thumbnail.jpg",
                mobile: "./assets/image-tiramisu-mobile.jpg",
                tablet: "./assets/image-tiramisu-tablet.jpg",
                desktop: "./assets/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
        },
        {
            image: {
                thumbnail: "./assets/image-baklava-thumbnail.jpg",
                mobile: "./assets/image-baklava-mobile.jpg",
                tablet: "./assets/image-baklava-tablet.jpg",
                desktop: "./assets/image-baklava-desktop.jpg"
            },
            name: "Pistachio Baklava",
            category: "Baklava",
            price: 4.00
        },
        {
            image: {
                thumbnail: "./assets/image-meringue-thumbnail.jpg",
                mobile: "./assets/image-meringue-mobile.jpg",
                tablet: "./assets/image-meringue-tablet.jpg",
                desktop: "./assets/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
        },
        {
            image: {
                thumbnail: "./assets/image-cake-thumbnail.jpg",
                mobile: "./assets/image-cake-mobile.jpg",
                tablet: "./assets/image-cake-tablet.jpg",
                desktop: "./assets/image-cake-desktop.jpg"
            },
            name: "Red Velvet Cake",
            category: "Cake",
            price: 4.50
        },
        {
            image: {
                thumbnail: "./assets/image-brownie-thumbnail.jpg",
                mobile: "./assets/image-brownie-mobile.jpg",
                tablet: "./assets/image-brownie-tablet.jpg",
                desktop: "./assets/image-brownie-desktop.jpg"
            },
            name: "Salted Caramel Brownie",
            category: "Brownie",
            price: 4.50
        }
];

const productList = document.querySelector(".product-container");

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
}
)


const newproducts = [
    {
        image: {
            thumbnail: "../assets/image-waffle-thumbnail.jpg",
            mobile: "../assets/image-waffle-mobile.jpg",
            tablet: "../assets/image-waffle-tablet.jpg",
            desktop: "./assets/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
        image: {
            thumbnail: "./assets/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/image-creme-brulee-mobile.jpg",
            tablet: "./assets/image-creme-brulee-tablet.jpg",
            desktop: "./assets/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    {
        image: {
            thumbnail: "./assets/image-macaron-thumbnail.jpg",
            mobile: "./assets/image-macaron-mobile.jpg",
            tablet: "./assets/image-macaron-tablet.jpg",
            desktop: "./assets/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
        },
        {
            image: {
                thumbnail: "./assets/image-tiramisu-thumbnail.jpg",
                mobile: "./assets/image-tiramisu-mobile.jpg",
                tablet: "./assets/image-tiramisu-tablet.jpg",
                desktop: "./assets/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
        },
        {
            image: {
                thumbnail: "./assets/image-baklava-thumbnail.jpg",
                mobile: "./assets/image-baklava-mobile.jpg",
                tablet: "./assets/image-baklava-tablet.jpg",
                desktop: "./assets/image-baklava-desktop.jpg"
            },
            name: "Pistachio Baklava",
            category: "Baklava",
            price: 4.00
        },
        {
            image: {
                thumbnail: "./assets/image-meringue-thumbnail.jpg",
                mobile: "./assets/image-meringue-mobile.jpg",
                tablet: "./assets/image-meringue-tablet.jpg",
                desktop: "./assets/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
        },
        {
            image: {
                thumbnail: "./assets/image-cake-thumbnail.jpg",
                mobile: "./assets/image-cake-mobile.jpg",
                tablet: "./assets/image-cake-tablet.jpg",
                desktop: "./assets/image-cake-desktop.jpg"
            },
            name: "Red Velvet Cake",
            category: "Cake",
            price: 4.50
        },
        {
            image: {
                thumbnail: "./assets/image-brownie-thumbnail.jpg",
                mobile: "./assets/image-brownie-mobile.jpg",
                tablet: "./assets/image-brownie-tablet.jpg",
                desktop: "./assets/image-brownie-desktop.jpg"
            },
            name: "Salted Caramel Brownie",
            category: "Brownie",
            price: 4.50
        }
];

const newproductList = document.querySelector(".new-product-container");

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
}
)


