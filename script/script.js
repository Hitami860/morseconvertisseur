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
