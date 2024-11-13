let convertirMorse = [];
let convertirFrancais = [];


fetch('./script/morse.json')
    .then(response => response.json())
    .then(data => { 
        data.forEach(item => {
            let key = Object.keys(item)[0];
            convertirMorse[key] = item[key];
        });
        console.log('Données de conversion en Morse chargées :', convertirMorse);
    });

fetch('./script/francais.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            let key = Object.keys(item)[0];
            convertirFrancais[key] = item[key];
        });
        console.log('Données de conversion en français chargées :', convertirFrancais);
    });


document.getElementById('convertirFrancaisMorse').addEventListener('click', () => {

    let textFrench = document.getElementById('textFrench').value.toLowerCase().split('');
    let reponseMorse = '';

    textFrench.forEach(char => {
        if (char == ' ') {
            reponseMorse += '/ ';
        } else if (convertirMorse[char]) {
            reponseMorse += convertirMorse[char] + ' ';
        } else {
            reponseMorse += char; 
        }
    });

    console.log('Résultat Morse :', reponseMorse.trim());
    document.getElementById('reponseMorse').value = reponseMorse.trim();

}
)



document.getElementById('convertirMorseFrancais').addEventListener('click', () => {

    let textMorse = document.getElementById('textMorse').value.trim().split(' ');
    let reponseFrancais = '';

    textMorse.forEach(code => {
        if (code == '/') {
            reponseFrancais += ' ';
        } else if (convertirFrancais[code]) {
            reponseFrancais += convertirFrancais[code];
        } else {
            reponseFrancais += code; 
        }
    });

    console.log('Résultat Français :', reponseFrancais);
    document.getElementById('reponseFrancais').value = reponseFrancais;
}
)














// let convertirMorse = {};
// let convertirFrancais = {};

// // Chargement des fichiers JSON
// fetch('./script/morse.json')
//     .then(response => response.json())
//     .then(data => { 
//         convertirFrancais = data;
//         console.log('Données de conversion en français chargées :', convertirFrancais);
//     });

// fetch('./script/francais.json')
//     .then(response => response.json())
//     .then(data => {
//         convertirMorse = data;
//         console.log('Données de conversion en morse chargées :', convertirMorse);
//     });

// // Fonction pour convertir le français en Morse
// function convertirFrancaisAMorse() {
//     let textFrench = document.getElementById('textFrench').value.toLowerCase().split('');
//     let reponseMorse = '';

//     textFrench.forEach(char => {
//         if (convertirMorse[char]) {
//             reponseMorse += convertirMorse[char] + ' ';
//         } else if (char === ' ') {
//             reponseMorse += '/ ';
//         } else {
//             reponseMorse += char; // Ajouter les caractères non reconnus directement
//         }
//     });

//     console.log('Résultat Morse :', reponseMorse.trim());
//     document.getElementById('reponseMorse').value = reponseMorse.trim();
// }

// // Fonction pour convertir le Morse en français
// function convertirMorseAFrancais() {
//     let textMorse = document.getElementById('textMorse').value.trim().split(' ');
//     let reponseFrancais = '';

//     textMorse.forEach(code => {
//         if (convertirFrancais[code]) {
//             reponseFrancais += convertirFrancais[code];
//         } else if (code === '/') {
//             reponseFrancais += ' ';
//         } else {
//             reponseFrancais += code; // Ajouter les séquences non reconnues directement
//         }
//     });

//     console.log('Résultat Français :', reponseFrancais);
//     document.getElementById('reponseFrancais').value = reponseFrancais;
// }

// // Ajout des écouteurs d'événements pour les boutons après que le DOM est chargé
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('convertirFrancaisMorse').addEventListener('click', convertirFrancaisAMorse);
//     document.getElementById('convertirMorseFrancais').addEventListener('click', convertirMorseAFrancais);
// });













// let convertirMorse = {};
// let convertirFrancais = {};

// // Chargement des fichiers JSON
// fetch('./script/morse.json')
//     .then(response => response.json())
//     .then(data => { 
//         convertirFrancais = data;
//         console.log(convertirFrancais); // Déplacez le console.log ici pour vérifier le contenu
//     });

// fetch('./script/francais.json')
//     .then(response => response.json())
//     .then(data => {
//         convertirMorse = data;
//         console.log(convertirMorse); // Déplacez le console.log ici pour vérifier le contenu
//     });

//     function convertirFrancaisAMorse() {
//         let textFrench = document.getElementById('textFrench').value.toLowerCase().split('');
//         let reponseMorse = '';
    
//         textFrench.forEach(char => {
//             if (convertirMorse[char]) {
//                 reponseMorse += convertirMorse[char] + ' ';
//             } else if (char === ' ') {
//                 reponseMorse += '/ ';
//             }
//         });
    
//         document.getElementById('reponseMorse').value = reponseMorse.trim();
//     }
    
//     // Fonction pour convertir le Morse en français
//     function convertirMorseAFrancais() {
//         let textMorse = document.getElementById('textMorse').value.trim().split(' ');
//         let reponseFrancais = '';
    
//         textMorse.forEach(code => {
//             if (convertirFrancais[code]) {
//                 reponseFrancais += convertirFrancais[code];
//             } else if (code === '/') {
//                 reponseFrancais += ' ';
//             }
//         });
    
//         document.getElementById('reponseFrancais').value = reponseFrancais;
//     }
    
//     // Ajout des écouteurs d'événements pour les boutons après que le DOM est chargé
//     document.addEventListener('DOMContentLoaded', function() {
//         document.getElementById('convertirFrancaisMorse').addEventListener('click', convertirFrancaisAMorse);
//         document.getElementById('convertirMorseFrancais').addEventListener('click', convertirMorseAFrancais);
//     });










// let convertirMorse = []
// let convertirFrancais = []

// fetch('./script/morse.json')
//     .then(response => response.json()

//     )
//     .then(data => {
//         convertirMorse.push(data);

//         console.log(convertirMorse);

//     });







// fetch('./script/francais.json')
//     .then(response => response.json()

//     )
//     .then(data => {
//         convertirFrancais.push(data);

//         console.log(convertirFrancais);


//     });



// function conversionMorse() {

//     let textFrench = document.getElementById('textFrench').value.toLowerCase();
//     let resultatMorse  = '';

//     for
    

// }

// function conversionFrancais() {

//     let textMorse = document.getElementById('textMorse').value


// }