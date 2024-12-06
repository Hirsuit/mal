// Obtener los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Obtener el contenedor principal donde se cambiará el contenido
const mainContent = document.querySelector('main');

// Definir los contenidos para cada sección
const content = {
    inbox: `
        <h1>Inbox</h1>
        <p>Here are your unread emails.</p>
    `,
    starred: `
        <h1>Starred</h1>
        <p>These are your starred emails.</p>
    `,
    sent: `
        <h1>Sent</h1>
        <p>These are the emails you've sent.</p>
    `,
    drafts: `
        <h1>Drafts</h1>
        <p>These are your saved drafts.</p>
    `,
    important: `
        <h1>Important</h1>
        <p>These are your important emails.</p>
    `,
    spam: `
        <h1>Spam</h1>
        <p>These are your spam emails.</p>
    `,
    trash: `
        <h1>Trash</h1>
        <p>These are your deleted emails.</p>
    `
};

// Función para actualizar el contenido del main
function updateContent(section) {
    if (content[section]) {
        mainContent.innerHTML = content[section];
    }
}

// Agregar el evento click a cada ítem del menú
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar que el enlace recargue la página
        const section = e.target.closest('a').id; // Obtener el id del elemento clickeado
        updateContent(section);
    });
});
