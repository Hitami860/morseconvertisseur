<?php


?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Morse</title>
</head>

<body>

    <section class="flex flex-col container mx-auto ">
        <textarea name="" id="textMorse" class="border border-black h-[250px]" placeholder="Texte en morse"></textarea>
        <div class="py-4 flex flex-col">
            <button type="submit" name="morseConversion" class="border border-gray-600 bg-gray-600 w-[10%] text-white">Convertir en francais</button>
            <input type="text" id="reponseFrancais" class="border border-black w-[10%]">
        </div>

        <textarea name="" id="textFrench" class="border border-black h-[250px]" placeholder="Texte en francais"></textarea>
        <div class="py-4 flex flex-col">
            <button type="submit" name="francaisConversion" class="border border-gray-600 bg-gray-600 w-[10%] text-white">Convertir en morse</button>
            <input type="text" id="reponseMorse" class="border border-black w-[10%]">
        </div>
    </section>
</body>

<script src="script/script.js"></script>

</html>