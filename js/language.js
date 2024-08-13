document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    if (savedLanguage === "gl") {
      const elementosEsp = document.querySelectorAll(".Esp"); // Seleccionar todos los elementos con la clase 'miObjeto'
      for (const elemento of elementosEsp) {
        elemento.style.display = "none";
      }
      const elementosGal = document.querySelectorAll(".Gal"); // Seleccionar todos los elementos con la clase 'miObjeto'
      for (const elemento of elementosGal) {
        elemento.style.display = "";
      }
      document.getElementById("EspButton").innerText = "Castelán";
      document.getElementById("GalButton").innerText = "Galego";
    } else if (savedLanguage === "es") {
      const elementosEsp = document.querySelectorAll(".Esp"); // Seleccionar todos los elementos con la clase 'miObjeto'
      for (const elemento of elementosEsp) {
        elemento.style.display = "";
      }
      const elementosGal = document.querySelectorAll(".Gal"); // Seleccionar todos los elementos con la clase 'miObjeto'
      for (const elemento of elementosGal) {
        elemento.style.display = "none";
      }
      document.getElementById("EspButton").innerText = "Español";
      document.getElementById("GalButton").innerText = "Gallego";
    }
  } else {
    const elementosEsp = document.querySelectorAll(".Esp"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosEsp) {
      elemento.style.display = "";
    }
    const elementosGal = document.querySelectorAll(".Gal"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosGal) {
      elemento.style.display = "none";
    }
    document.getElementById("EspButton").innerText = "Español";
    document.getElementById("GalButton").innerText = "Gallego";
  }
});

function changeLanguage(idioma) {
  if (idioma === "gl") {
    const elementosEsp = document.querySelectorAll(".Esp"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosEsp) {
      elemento.style.display = "none";
    }
    const elementosGal = document.querySelectorAll(".Gal"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosGal) {
      elemento.style.display = "";
    }

    localStorage.setItem("language", "gl");
    document.getElementById("EspButton").innerText = "Castelán";
    document.getElementById("GalButton").innerText = "Galego";
  } else if (idioma === "es") {
    const elementosEsp = document.querySelectorAll(".Esp"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosEsp) {
      elemento.style.display = "";
    }
    const elementosGal = document.querySelectorAll(".Gal"); // Seleccionar todos los elementos con la clase 'miObjeto'
    for (const elemento of elementosGal) {
      elemento.style.display = "none";
    }

    localStorage.setItem("language", "es");
    document.getElementById("EspButton").innerText = "Español";
    document.getElementById("GalButton").innerText = "Gallego";
  }
}
