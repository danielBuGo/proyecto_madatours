document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard de MaDaTours cargado correctamente.");

    // El enlace de registro ya funciona mediante el atributo href en HTML,
    
    const linkRegistro = document.getElementById('link-nav-registro');

    linkRegistro.addEventListener('click', (e) => {
        console.log("Navegando al formulario de registro...");
    });
});