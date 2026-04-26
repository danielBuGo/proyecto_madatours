// Referencias a los elementos
const btnRegistrar = document.getElementById('btn-registrar');
const btnEntendido = document.getElementById('btn-entendido');
const modalError = document.getElementById('modal-error');
const modalDB = document.getElementById('modal-db');

// Referencias a los campos
const campos = [
    document.getElementById('reg-nombre'),
    document.getElementById('reg-correo'),
    document.getElementById('reg-telefono'),
    document.getElementById('reg-pass')
];

// Función para mostrar el error
function mostrarError() {
    modalError.style.display = 'flex';
}

// Función para ocultar el error
function ocultarError() {
    modalError.style.display = 'none';
}

// Lógica del botón Registrarse
btnRegistrar.addEventListener('click', () => {
    // Verificamos si algún campo está vacío
    const algunVacio = campos.some(campo => campo.value.trim() === "");

    if (algunVacio) {
        // En lugar de alert, usamos nuestro modal
        mostrarError();
    } else {
        // Si todo está lleno, procedemos a la "Base de Datos"
        modalDB.style.display = 'flex';

        setTimeout(() => {
            modalDB.style.display = 'none';
            // Una vez guardado, volvemos al inicio según el mapa
            window.location.href = "index.html";
        }, 2000);
    }
});

// Lógica para cerrar el error
btnEntendido.addEventListener('click', () => {
    ocultarError();
});

