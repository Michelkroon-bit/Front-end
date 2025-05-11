let games=[
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]


// main list
let cart = [];
let genres = [...new Set(games.map(game => game.genre))];
let genre_dropdown = document.getElementById("Genre-Dropdown")
main_game_container = document.getElementById("main-container");

function addToCart(game) {
    alert(`Added ${game.title} to your cart`)
    cart.push(game);
    updateCartUI();
}

genres.forEach(genre => {
    let option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genre_dropdown.appendChild(option);
});

function displayGames(gameList) {
    main_game_container.innerHTML = ""; 

    gameList.forEach(game => {
        let Game_Div = document.createElement("div");
        Game_Div.classList.add("game-div");

        let name = document.createElement("h3");
        let price = document.createElement("p");
        let genre = document.createElement("p");
        let rating = document.createElement("p");
        let addButton = document.createElement("button")
        addButton.classList.add("AddToCartButton");

        name.textContent = `Title: ${game.title}`;
        price.textContent = `Price: €${game.price.toFixed(2)}`;
        genre.textContent = `Genre: ${game.genre}`;
        rating.textContent = `Rating: ${game.rating}`;
        addButton.textContent = "Add to Cart"; 
        addButton.addEventListener("click", () => addToCart(game)); 

        Game_Div.appendChild(name);
        Game_Div.appendChild(price);
        Game_Div.appendChild(genre);
        Game_Div.appendChild(rating);
        Game_Div.appendChild(addButton);

        main_game_container.appendChild(Game_Div);
    });
}


games.forEach(games => {

    console.log(games)

    let Game_Div = document.createElement("div")
    Game_Div.classList.add("Game-div")

    let name = document.createElement("h3");
    let price = document.createElement("p");
    let genre = document.createElement("p");
    let rating = document.createElement("p");
    let addButton = document.createElement("button")
    addButton.classList.add("AddToCartButton");

    name.textContent = `Title: ${games.title}`
    price.textContent = `Price: ${games.price}`
    genre.textContent = `Genre: ${games.genre}`
    rating.textContent = `Rating: ${games.rating}`
    
    addButton.textContent = "Add to Cart"; 
    addButton.addEventListener("click", () => addToCart(games)); 

    Game_Div.appendChild(name)
    Game_Div.appendChild(price)
    Game_Div.appendChild(genre)
    Game_Div.appendChild(rating)
    Game_Div.appendChild(addButton);

    main_game_container.appendChild(Game_Div) 
});


let submit_button = document.getElementById("submit_genre");
submit_button.addEventListener("click", function() {
    let selected_Genre = document.getElementById("Genre-Dropdown").value;
    let filteredGames = games.filter(game => game.genre === selected_Genre || selected_Genre === "Alle");

    displayGames(filteredGames); 
});


let submit_button_price = document.getElementById("submit_price");
submit_button_price.addEventListener("click", function() {
    let selected_price = parseFloat(document.getElementById("price-input").value); 
    let filteredGamesByPrice = games.filter(game => game.price > selected_price); 

    displayGames(filteredGamesByPrice);
});

submit_button.addEventListener("click", function() {
    let selected_Genre = document.getElementById("Genre-Dropdown").value;
    let selected_price = parseFloat(document.getElementById("price-input").value);

    let filteredGames = games.filter(game => 
        (game.genre === selected_Genre || selected_Genre === "Alle") &&
        (game.price <= selected_price || isNaN(selected_price)) 
    );

    displayGames(filteredGames); 
});


let clear_filter_button = document.getElementById("Clear");
clear_filter_button.addEventListener("click", function() {
    displayGames(games); 
}); 

function updateCartUI() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = ""; 

    let totalPrice = 0;

    cart.forEach(game => {
        let item = document.createElement("p");
        item.textContent = `${game.title} (€${game.price.toFixed(2)})`;
        cartItems.appendChild(item);

        totalPrice += game.price; 
    });

    cartTotal.textContent = `Total: €${totalPrice.toFixed(2)}`; 
}

let clear_cart = document.getElementById("clear-cart");
clear_cart.addEventListener("click", function() {
    cart = []; 
    updateCartUI(); 
});