function trouverMaximum(tableau) {
    return Math.max(...tableau);
  }
  
  const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
  const resultat = trouverMaximum(numbers);
  console.log("Le plus grand nombre est :", resultat);