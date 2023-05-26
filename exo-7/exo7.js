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

const render = (list) => {
    let itemsContainer = document.getElementById("allItems");
    itemsContainer.innerHTML = '';
    for (let article of list) {
        // console.log(article);
        // console.log("type de produit (eng) :", article.type);
        article.translatedType = translateType[article.type];
        // console.log("type traduit :", article.translatedType.toLowerCase());
    
        let newItemSheet = document.createElement("div");
        newItemSheet.className = "itemSheet";
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
}
render(jsonDatas);
console.log(jsonDatas);
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let input = document.getElementById('searchField').value.toLowerCase();
    console.log("input result :", input);

    const dataMap = new Map(Object.entries(translateType));
    // console.log(dataMap);
    const dataArray = Array.from(dataMap.values());
    // console.log(dataArray);
    for (i = 0; i < dataArray.length; i++){
        dataArray[i] = dataArray[i].toLocaleLowerCase();
    }
    console.log(dataArray);
    if (dataArray.includes(input)) {
        console.log("test ok !");
        let jsonDatasCategory = jsonDatas.filter(product => product.translatedType.toLowerCase() === input);
        console.log("tableau filtré : ",jsonDatasCategory);
        render(jsonDatasCategory);
    } 
    // else {
    //     alert ('merci d\'entrer une catégorie valide : voitures, maison, jeu, veux vidéos, spectacles');
    //     location.reload();
    // }
});

// console.log("nouveau tableau de produits :", jsonDatas);

