function trouverMaximum(tableau) {
   
    
    let maximum = tableau[0];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > maximum) {
      maximum = tableau[i];
    }
  }

  return maximum;
    
  }
  
  
const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
const resultat = trouverMaximum(numbers);
console.log("Le plus grand nombre dans le tableau est :", resultat);