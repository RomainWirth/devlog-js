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

for (let article of jsonDatas) {
    console.log(article);
    // console.log("type de produit (eng) :", article.type);
    article.translatedType = translateType[article.type];

    let itemsContainer = document.getElementById("allItems");

    let newItemSheet = document.createElement("div");
    newItemSheet.className = "itemSheet";
    console.log(newItemSheet);
    itemsContainer.appendChild(newItemSheet);

    const createStructure = (titre, valeur, valueSuffix) => {
        return `
        <div class="itemType" style="width : 50%; display: flex; justify-content: space-between;">
            <h4>${titre} :</h4>
            <p>${valeur} ${valueSuffix ?? ''}</p>
        </div>
        `
    }

    newItemSheet.innerHTML = `
        <h3 class="itemName">${article.name}</h3>
        ${createStructure('Catégorie', article.translatedType)}
        ${createStructure('Description', article.description)}
        ${createStructure('Prix', article.price, ' €')}
        ${createStructure('Quantité en stock', article.quantity)}
    `
}
console.log("nouveau tableau de produits :", jsonDatas);

