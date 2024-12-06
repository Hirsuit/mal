// Obtener el botón de + y el cuadro de diálogo principal
const botonPlus = document.querySelector(".boton-plus");
const dialogo = document.getElementById("dialogo");
const cerrarDialogo = document.getElementById("cerrar");

// Opciones para agregar clase
const agregarPorCodigo = document.getElementById("codigo");
const agregarPorQR = document.getElementById("qr");

// Mostrar el cuadro de diálogo cuando se haga clic en el botón "+"
botonPlus.addEventListener("click", () => {
    dialogo.style.display = "flex";  // Mostrar el cuadro de diálogo
});

// Cerrar el cuadro de diálogo
cerrarDialogo.addEventListener("click", () => {
    dialogo.style.display = "none";  // Ocultar el cuadro de diálogo
});

// Acción para "Por código de número"
agregarPorCodigo.addEventListener("click", () => {
    // Cerrar el cuadro de diálogo principal
    dialogo.style.display = "none";  
    // Abrir el cuadro de diálogo para ingresar código
    abrirDialogoCodigo();
});

// Acción para "Por código QR"
agregarPorQR.addEventListener("click", () => {
    alert("Has elegido agregar una clase por código QR.");
    dialogo.style.display = "none";  // Cerrar el cuadro de diálogo
    // Aquí puedes agregar el código para abrir un cuadro de diálogo de escaneo de QR
});

// Función para abrir el cuadro de diálogo de código
function abrirDialogoCodigo() {
    // Crear el nuevo cuadro de diálogo
    const dialogoCodigo = document.createElement("div");
    dialogoCodigo.classList.add("dialogo");
    dialogoCodigo.innerHTML = `
        <div class="dialogo-contenido">
            <h2>Ingresa el código de 6 dígitos</h2>
            <input type="text" maxlength="6" placeholder="Código de 6 dígitos" class="codigo-input" id="codigo-entrada">
            <button id="enviar-codigo">Enviar</button>
            <button id="cerrar-codigo-dialogo">Cerrar</button>
        </div>
    `;

    // Añadir el cuadro de diálogo al body
    document.body.appendChild(dialogoCodigo);

    // Acción para el botón de cerrar el cuadro de diálogo
    document.getElementById("cerrar-codigo-dialogo").addEventListener("click", () => {
        document.body.removeChild(dialogoCodigo);  // Eliminar el cuadro de diálogo de código
    });

    // Acción para enviar el código
    document.getElementById("enviar-codigo").addEventListener("click", () => {
        const codigo = document.getElementById("codigo-entrada").value;
        if (codigo.length === 6) {
            alert(`Código ingresado: ${codigo}`);
            document.body.removeChild(dialogoCodigo);  // Cerrar el cuadro de diálogo de código
        } else {
            alert("El código debe ser de 6 dígitos.");
        }
    });
}
