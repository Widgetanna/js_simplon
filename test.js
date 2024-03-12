function trouverMotLePlusLong(phrase) {
    const mots = phrase.split(' ');
    let motLePlusLong = mots[0];

    for (let i = 1; i < mots.length; i++) {
        if (mots[i].length > motLePlusLong.length) {
            motLePlusLong = mots[i];
        }
    }

    return motLePlusLong;
}

const phrase = "La révolution numérique a transformé l'informatique en un champ infiniment vaste, explorant des concepts tels que l'intelligence artificielle, l'apprentissage automatique, la cybersécurité et la réalité virtuelle.";


const resultatMotLePlusLong = trouverMotLePlusLong(phrase);

console.log("Le mot le plus long dans la phrase :", resultatMotLePlusLong);