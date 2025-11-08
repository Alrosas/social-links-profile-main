
const createCard = (title, content) => {
    // Crear elementos DOM necesarios
    const col = document.createElement('div');
    col.classList.add('col-md-4', 'mb-3');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = content;

    // Construir la estructura de la tarjeta
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
};

const cardData = [
    { title: "Card 1", content: "Contenido de la tarjeta 1" },
    { title: "Card 2", content: "Contenido de la tarjeta 2" },
    { title: "Card 3", content: "Contenido de la tarjeta 3" }
];

const cardContainer = document.getElementById('cardContainer');

cardData.forEach(card => {
    const newCard = createCard(card.title, card.content);
    cardContainer.appendChild(newCard);
});
