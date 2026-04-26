// 1. Referencias a los elementos del DOM (nuestros "objetos" de la interfaz)
const btnEnviar = document.getElementById('btn-enviar');
const btnEntendido = document.getElementById('btn-entendido');
const modalError = document.getElementById('modal-error');

const inputUsuario = document.getElementById('usuario');
const inputPassword = document.getElementById('password');

// 2. Función para mostrar el error
function mostrarError() {
    modalError.style.display = 'flex'; // Cambiamos de 'none' a 'flex' para que se vea
}

// 3. Función para ocultar el error (Reiniciar al inicio según el mapa)
function ocultarError() {
    modalError.style.display = 'none';
    // Opcional: Limpiar los campos para un reinicio real
    inputUsuario.value = '';
    inputPassword.value = '';
    inputUsuario.focus(); // Pone el cursor de nuevo en el primer campo
}

// 4. Lógica del botón Enviar
btnEnviar.addEventListener('click', () => {
    const usuario = inputUsuario.value;
    const password = inputPassword.value;

    // Validación simple: Si están vacíos o no son los correctos, muestra error
    // (Luego conectaremos esto a la base de datos que dibujamos)
    if (usuario === "" || password === "") {
        mostrarError();
    } else {
        alert("¡Datos correctos! Aquí irías al Dashboard.");
        // Aquí es donde en el futuro pondríamos: window.location.href = "dashboard.html";
    }
});

// 5. Lógica del botón Entendido (El cierre del ciclo de error)
btnEntendido.addEventListener('click', () => {
    ocultarError();
});
