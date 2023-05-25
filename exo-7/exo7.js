console.log("exo-7");

// console.log(jsonDatas);
// console.log(typeof(jsonDatas));

let data = jsonDatas;
console.log("base de données :", data);
let translateType = {
    car: "Voitures",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéos",
    show: "Spectacles"
}

for (i = 0; i < data.length; i++) {
    console.log(data[i]);
    let dataTypes = data[i].type;
    console.log("type de produit (eng) :", dataTypes);
    
}
