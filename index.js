//	creati o functie care primeste un obiect ca argument 
//si arata in consola tipul la fiecare valoare din obiect
function afiseazaTipuriValori(obiect) {
  for (const proprietate in obiect) {
    const valoare = obiect[proprietate];
    const tipValoare = typeof valoare;

    console.log(`Proprietate: ${proprietate}, Tip valoare: ${tipValoare}`);
  }
}
// Exemplu de utilizare
const obiectExemplu = {
  nume: "Vanea",
  varsta: 47,
  esteCasatorita: false,
  hobby: ["pescuit", "calatorit"],
  adresa: {
    strada: "Cuza-Voda",
    numar: 10,
    oras: "Chisinau",
  },
};

afiseazaTipuriValori(obiectExemplu);
////	creati un obiect, dupa un alt obiect care este identic primului ar in afara de asta 
//mai are cateva proprietati iar una din din valorile existente este schimbata.
const obiectOriginal = {
  nume: "Bony",
  varsta: 25,
  esteCasatorita: false,
  hobby: ["citit", "calatorit"],
  adresa: {
    strada: "Kiev",
    numar: 37,
    oras: "Chisinau",
  },
};

const obiectNou = {
  ...obiectOriginal, //Copiaza toate proprietatile si valorile din obiectul original
  prenume: "Buono", //Adauga o noua proprietate
  varsta: 32, //Modifica valoarea proprietatii "varsta"
  adresa: {
    ...obiectOriginal.adresa, //Copiaza proprietatea "adresa" si valorile sale
    apartament: 12, //Adauga o noua proprietate in "adresa"
  },
};

console.log(obiectNou);

//	creati o functie care primeste un array de cifre si va intoarce acelasi array 
//doar ca fiecarui element ii va fi adaugat 1, folositi metoda reduce
function incrementeazaElemente(arrayCifre) {
  return arrayCifre.reduce((acumulator, element) => {
    acumulator.push(element + 1);
    return acumulator;
  }, []);
}

// Exemplu de utilizare

const listaCifre = [1, 2, 3, 4, 5];

const listaIncrementa = incrementeazaElemente(listaCifre);

console.log(listaIncrementa); // [2, 3, 4, 5, 6]