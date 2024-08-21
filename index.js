// const cardContainer = document.getElementById("card-container");
// const card = document.createElement("div");
// card.className = "card";
// const cardImage = document.createElement("img");
// cardImage.src;
// cardImage.alt;
// const cardTitle = document.createElement("h2");
// cardTitle.textContent = "prodcuto";
// const cardDescription = document.createElement("p");
// cardDescription.textContent = "descripcion de producto.";
// card.appendChild(cardImage);
// card.appendChild(cardTitle);
// card.appendChild(cardDescription);
// cardContainer.appendChild(card);








document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor donde se agregarán las tarjetas
    const cardContainer = document.getElementById('card-container');

    // Array de objetos que contiene la información para cada tarjeta
    const cardData = [
        { Nombre: 'Producto1', descripcion: 'Descripción tarjeta 1', imageUrl: 'https://via.placeholder.com/200' },
        { Nombre: 'Producto2', descripcion: 'Descripción tarjeta 2', imageUrl: 'https://via.placeholder.com/200' },
        { Nombre: 'Producto3', descripcion: 'Descripción tarjeta 3', imageUrl: 'https://via.placeholder.com/200' },
        { Nombre: 'Producto4', descripcion: 'Descripción tarjeta 4', imageUrl: 'https://via.placeholder.com/200' }
    ];

    // Función para crear una tarjeta
    function createCard(nombre, descripcion, imageUrl) {
        // Crea un nuevo elemento div para la tarjeta
        const card = document.createElement('div');
        card.className = 'card';

        // Crea el elemento de la imagen de la tarjeta
        const cardImage = document.createElement('img');
        cardImage.src = imageUrl;
        cardImage.alt = 'Imagen del producto';

        // Crea el título de la tarjeta
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = nombre;

        // Crea la descripción de la tarjeta
        const cardDescription = document.createElement('p');
        cardDescription.textContent = descripcion;

        // Agrega los elementos de la tarjeta al div de la tarjeta
        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);

        // Retorna el div de la tarjeta creada
        return card;
    }

    // Recorre el array de datos y crea una tarjeta para cada objeto
    cardData.forEach(data => {
        // Llama a la función createCard con los datos de la tarjeta
        const card = createCard(data.Nombre, data.descripcion, data.imageUrl);

        // Agrega la tarjeta al contenedor
        cardContainer.appendChild(card);
    });
});
