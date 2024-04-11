document.addEventListener("DOMContentLoaded", function () {
    var savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        if (savedLanguage == 'gl') {
            var elementosEsp = document.querySelectorAll('.Esp'); // Seleccionar todos los elementos con la clase 'miObjeto'
            elementosEsp.forEach(function (elemento) {
                elemento.style.display = 'none';
            });
            var elementosGal = document.querySelectorAll('.Gal'); // Seleccionar todos los elementos con la clase 'miObjeto'
            elementosGal.forEach(function (elemento) {
                elemento.style.display = '';
            });
        } else if (savedLanguage == 'es') {
            var elementosEsp = document.querySelectorAll('.Esp'); // Seleccionar todos los elementos con la clase 'miObjeto'
            elementosEsp.forEach(function (elemento) {
                elemento.style.display = '';
            });
            var elementosGal = document.querySelectorAll('.Gal'); // Seleccionar todos los elementos con la clase 'miObjeto'
            elementosGal.forEach(function (elemento) {
                elemento.style.display = 'none';
            });
        }
    } else {
        var elementosEsp = document.querySelectorAll('.Esp'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosEsp.forEach(function (elemento) {
            elemento.style.display = '';
        });
        var elementosGal = document.querySelectorAll('.Gal'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosGal.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
    }
});


function changeLanguage(idioma) {
    if (idioma == 'gl') {
        var elementosEsp = document.querySelectorAll('.Esp'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosEsp.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
        var elementosGal = document.querySelectorAll('.Gal'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosGal.forEach(function (elemento) {
            elemento.style.display = '';
        });
        localStorage.setItem('language', 'gl');
    } else if (idioma == 'es') {
        var elementosEsp = document.querySelectorAll('.Esp'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosEsp.forEach(function (elemento) {
            elemento.style.display = '';
        });
        var elementosGal = document.querySelectorAll('.Gal'); // Seleccionar todos los elementos con la clase 'miObjeto'
        elementosGal.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
        localStorage.setItem('language', 'es');
    }
}