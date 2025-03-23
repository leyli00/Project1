(() => {
    if (window.location.href === "https://www.e-bebek.com/") {
        function addCSS() {
            const style = document.createElement("style");
            style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .main {
            padding-bottom: 50px;
            width: 1320px;
        }
        
        .carousel-container {
            padding: 0px 15px;
        }
        
        .carousel-header {
            background-color: #fef6eb;
            padding: 25px 67px;
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
            user-select: none;
        }
        
        .carousel-header-h2 {
            font-family: "Quicksand", sans-serif;
            font-size: 28.8px;
            font-weight: 700;
            line-height: 1.11;
            color: #f28e00;
        }
        
        .cards-container {
            position: relative;
        }
        
        .cards {
            display: flex;
            box-shadow: 15px 15px 30px 0 #ebebeb80;
            background-color: #fff;
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
            overflow: hidden;
            scroll-behavior: smooth;
        }
        
        .card {
            flex: 0 0 242px;
            border: 1px solid #ededed;
            display: flex;
            flex-direction: column;
            padding: 5px;
            border-radius: 10px;
            font-family: "Poppins", "cursive";
            color: #7d7d7d;
            margin: 20px 20px 20px 3px;
            max-width: 100%;
            cursor: pointer;
            user-select: none;
        }
        
        .card:hover {
            z-index: 2;
            box-shadow: 0 0 0 0 #00000030, inset 0 0 0 3px #f28e00;
        }
            
        .card-link{
            color:rgb(125, 125, 125)
        }

        .card-link:hover{
            color:rgb(125, 125, 125)
        }

        .card .heart-img-div{
            right: 15px;
            top: 10px;
        }
        
        
        .card-product-img {
            max-width: 100%;
            height: 203px;
            object-fit: contain;
            margin-bottom: 65px;
        }
        
        .card-content {
            padding: 0px 17px 13px;
        }
        
        .product-description {
            display: block;
            font-weight: 500;
            line-height: 14.08px;
            margin-block-end: 10px;
            font-size: 11.52px;
            height: 42px;
        }
        
        .brand {
            font-weight: bolder;
        }
        
        .product-rating {
            padding: 5px 0 15px;
            display: flex;
            align-items: center;
            font-size: 12px;
        }
        
        .stars {
            font-size: 14px;
            color: #fed100;
        }
        
        .stars i {
            margin-left: 2.5px;
            margin-right: 5px;
        }

        .rating-count{
            font-weight: 400;
        }
        
        .org-price-percent {
            display: flex;
            align-items: center;
            height: 30px;
        }
        
        .product-original-price {
            font-size: 13.44px;
            line-height: 31.504px;
            font-weight: 500;
            text-decoration: line-through;
            height: 30px;
        }

        .product-price-no-discount{
            font-size: 21.12px;
            font-weight: 600;
            color: rgb(125, 125, 125);
            line-height: 33.792px;
        }
        
        .price-percent {
            color: #00a365;
            font-size: 18px;
            font-weight: 700;
            height: 30px;
            display: flex;
            align-items: center;
            margin-left: 4.8px;
            line-height: 28.8px;
            margin-left: 10px;
        }

        .icon-decrease{
            height: 22px;
            font-size: 22px;
            margin-left: 3px;
        }
        
        .product-price {
            font-size: 21.12px;
            font-weight: 600;
            color: #00a365;
            line-height: 33.792px;
        }
        
        .product-promotion {
            min-height: 70px;
        }
        
        .add-to-bucket-div {
            display: flex;
            padding: 0px 17px 13px 17px;
        }
        
        .add-to-bucket {
            width: 196px;
            padding: 15px 20px;
            border-radius: 37.5px;
            background-color: #fff7ec;
            text-align: center;
            color: #f28e00;
            font-family: "Poppins", "cursive";
            font-size: 13.44px;
            font-weight: 700;
            line-height: 18.0096px;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            border: none;
            cursor: pointer;
        }
        
        .add-to-bucket:hover {
            background-color: #f28e00;
            color: #fff;
        }
        
        .swiper-btns {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: rgb(254, 246, 235);
            color: rgb(242, 142, 0);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }

        .swiper-btns:hover{ 
            background-color: #fff;
        }

        .swiper-btns i{
            font-size: 20px;
        }
        
        .prev-div {
            bottom: 50%;
            left: -65px;
        }
        
        .next-div {
            bottom: 50%;
            right: -65px;
        }
        
        .swiper-btns:hover {
            background-color: #fff;
            border: 1px solid rgb(242, 142, 0);
        }

       
                
        .heart-img-div{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 #00000024;
            position: absolute;
        }
        
        .heart-img-default{
        
            width : 25px;
            height: 25px;
            position: absolute;
            top: 12.5px;
            right: 12.5px;
        }

        .heart-img-div:hover .heart-img-default{
            display: none;
        }

        .heart-img-div:hover .heart-img-hovered{
            display: block;
        }


        .heart-img-div:hover .heart-img-filled{
            display: none;
        }
        .heart-img-filled{
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0px;
            right: 0px;
        }

        .heart-img-hovered{
            top: 0;
            left: 0;
            height: 50px;
            width: 50px;
            display: none;
        }
            `;
            document.head.appendChild(style);
        }

        addCSS();

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
        document.head.appendChild(link);

        const main = document.createElement("div");
        main.className = "main";
        document.body.appendChild(main);

        const carousel_container = document.createElement("div");
        carousel_container.className = "carousel-container";
        main.appendChild(carousel_container);

        const carousel_header = document.createElement("div");
        carousel_header.className = "carousel-header";
        carousel_container.appendChild(carousel_header);
        const carousel_header_h2 = document.createElement("h2");
        carousel_header_h2.className = "carousel-header-h2";
        carousel_header_h2.innerText = "Beğenebileceğinizi düşündüklerimiz";
        carousel_header.appendChild(carousel_header_h2);

        const cards_container = document.createElement("div");
        cards_container.className = "cards-container";
        carousel_container.appendChild(cards_container);
        const cards = document.createElement("div");
        cards.className = "cards";
        cards_container.appendChild(cards);

        const prev_btn = document.createElement("div");
        prev_btn.className = "swiper-btns prev-div";
        cards_container.appendChild(prev_btn)
        const prev_btn_icon = document.createElement("i");
        prev_btn_icon.className = "fa-solid fa-chevron-left";
        prev_btn.appendChild(prev_btn_icon);

        const next_btn = document.createElement("div");
        next_btn.className = "swiper-btns next-div";
        cards_container.appendChild(next_btn)
        const next_btn_icon = document.createElement("i");
        next_btn_icon.className = "fa-solid fa-chevron-right";
        next_btn.appendChild(next_btn_icon);

        let eBebekProducts = localStorage.getItem("e-bebek-products");
        async function getJsonData() {
            if (!eBebekProducts) {
                eBebekProducts = await fetch("https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json")
                    .then(response => response.json()).then(data => data)

                eBebekProducts = eBebekProducts.map(product => ({ ...product, isFavorite: false }))
                localStorage.setItem("e-bebek-products", JSON.stringify(eBebekProducts));
                displayCards(eBebekProducts);
            } else {
                displayCards(JSON.parse(eBebekProducts));
            }
        }

        function displayCards(data) {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "card";
                card.setAttribute("data-id", `${item.id}`);
                card.innerHTML = `
                <a href="${item.url}" target="_blank" class="card-link">
                <img src="${item.img}" class="card-product-img">
                <div class="heart-img-div" data-id="${item.id}" onclick="event.preventDefault();">

                ${item.isFavorite == false

                        ? ` <img  src="https://www.e-bebek.com/assets/svg/default-favorite.svg"  class="heart-img-default">
                        `
                        : `<img src="https://www.e-bebek.com/assets/svg/added-favorite.svg"  class="heart-img-filled">`}

                <img src="https://www.e-bebek.com/assets/svg/default-hover-favorite.svg" class="heart-img-hovered">

                </div>
                <div class="card-content">
                <div class="product-description"><span class="brand">${item.brand} - </span> <span class="name">${item.name}</span></div>
                <div class="product-rating">
                <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
                <div class="rating-count">(15)</div>
                </div>
                <div class="product-pricing">
                <div class="org-price-percent">
                ${item.original_price > item.price
                        ?
                        `
                    <span class="product-original-price">${item.original_price}TL</span>
                    <span class="price-percent">%${Math.ceil((100 - (item.price * (100 / item.original_price))))}<i class="icon icon-decrease"></i></span>
                    
                    `
                        : ``}

                </div>
                <span class="${item.original_price > item.price ? `product-price` : `product-price-no-discount`}">${item.price}TL</span></div>
                </div>
                <div class="product-promotion">
                <div></div></div>
                <div class="add-to-bucket-div">
                <button class="add-to-bucket" onclick="event.preventDefault();">Sepete Ekle</button>
                </div>
                </div></a>
                
                `
                cards.appendChild(card);

            });
            swipeBtns();
            let heart_img_div = document.querySelectorAll(".heart-img-div")
            heart_img_div.forEach(item => {
                item.addEventListener('click', (e) => {
                    let product_id = item.getAttribute("data-id")
                    let getEBebekProducts = JSON.parse(localStorage.getItem("e-bebek-products"))

                    let prdup = getEBebekProducts.find(product => product.id == product_id)
                    prdup.isFavorite = !getEBebekProducts.filter(product => product.id == product_id)[0].isFavorite
                    localStorage.setItem("e-bebek-products", JSON.stringify(getEBebekProducts));

                    isFavoriteState = item.children[0].getAttribute("src");
                    if (isFavoriteState != "https://www.e-bebek.com/assets/svg/added-favorite.svg") {
                        item.children[0].setAttribute("src", "https://www.e-bebek.com/assets/svg/added-favorite.svg")
                        item.children[0].className = "heart-img heart-img-filled"
                    } else {
                        item.children[0].setAttribute("src", "https://www.e-bebek.com/assets/svg/default-favorite.svg")
                        item.children[0].className = "heart-img heart-img-default"
                    }

                    console.log(item.children[0])


                })
            });

        }

        getJsonData();

        let heart_img_div = document.querySelectorAll(".heart-img-div")
        heart_img_div.forEach(item => {
            item.addEventListener('click', (e) => {
                let product_id = item.getAttribute("data-id")
                let getEBebekProducts = JSON.parse(localStorage.getItem("e-bebek-products"))

                getEBebekProducts = !getEBebekProducts.filter(product => product.id == product_id)[0].isFavorite
                console.log(getEBebekProducts)
            })
        });

        function swipeBtns() {
            const card = document.querySelector(".card");
            const card_width = card.offsetWidth + 20;

            next_btn.addEventListener("click", () => {
                cards.scrollLeft += card_width;
            })

            prev_btn.addEventListener("click", () => {
                cards.scrollLeft -= card_width;
            })
        }

        let targetDiv = document.querySelector(".Section2A");
        targetDiv.insertBefore(main, targetDiv.firstChild);
    }

    else {
        console.log("wrong site");
    }

})()
