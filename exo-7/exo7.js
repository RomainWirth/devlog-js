console.log("exo-7");

// console.log(jsonDatas);
// console.log(typeof(jsonDatas));

let data = jsonDatas;

let translateType = {
    car: "Voitures",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéos",
    show: "Spectacles"
}

const render = () => {
    let itemsContainer = document.getElementById("allItems");
    itemsContainer.innerHTML = ''; // remise à zéro du DOM
    for (let article of data) {
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
render();
console.log("data :", data);
const filter = () => {
    
}
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
        data = data.filter(product => product.translatedType.toLowerCase() === input);
        console.log("tableau filtré : ", data);
        render();
    } 
    else {
        alert ('merci d\'entrer une catégorie valide : voitures, maison, jeu, veux vidéos, spectacles');
    }
});
document.getElementById('inStock').onclick = function checkClick() {
    console.log("test checkbox");
    let inStock = data.filter(product => product.quantity > 0);
    render(inStock);
}
// console.log("nouveau tableau de produits :", data);

