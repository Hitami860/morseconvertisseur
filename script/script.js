let convertirMorse = []
let convertirFrancais = []

fetch('./script/morse.json')
    .then(response => response.json()

    )
    .then(data => {
        convertirMorse.push(data);

        console.log(convertirMorse);

    });







fetch('./script/francais.json')
    .then(response => response.json()

    )
    .then(data => {
        convertirFrancais.push(data);

        console.log(convertirFrancais);


    });



function conversionMorse() {

    let textFrench = document.getElementById('textFrench').value
    

}

function conversionFrancais() {

    let textMorse = document.getElementById('textMorse').value


}