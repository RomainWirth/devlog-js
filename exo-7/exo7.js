console.log("exo-7");

// console.log(jsonDatas);
// console.log(typeof(jsonDatas));

// let data = jsonDatas;
// console.log("base de données :", data);

let translateType = {
    car: "Voitures",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéos",
    show: "Spectacles"
}

for (i = 0; i < jsonDatas.length; i++) {
    console.log(jsonDatas[i]);
    // console.log("type de produit (eng) :", jsonDatas[i].type);
    jsonDatas[i].translatedType = translateType[jsonDatas[i].type];

    let itemName = jsonDatas[i].name;
    let itemType = jsonDatas[i].translatedType;
    let itemContent = jsonDatas[i].description;
    let itemPrice = jsonDatas[i].price;
    let itemQuantity = jsonDatas[i].quantity;

    let itemsContainer = document.getElementById("allItems");

    let newItemSheet = document.createElement("div");
    newItemSheet.className = "itemSheet";
    console.log(newItemSheet);
    itemsContainer.appendChild(newItemSheet);

    newItemSheet.innerHTML = `
        <h3 class="itemName">${itemName}</h3>
        <div class="itemType">
            <h4>Catégorie : </h4>
            <p>${itemType}</p>
        </div>
        <div class="itemType">
            <h4>Description : </h4>
            <p>${itemContent}</p>
        </div>
        <div class="itemType">
            <h4>Prix : </h4>
            <p>${itemPrice} €</p>
        </div>
        <div class="itemType">
            <h4>Quantité disponible : </h4>
            <p>${itemQuantity}</p>
        </div>
    `
}
console.log("nouveau tableau de produits :", jsonDatas);

