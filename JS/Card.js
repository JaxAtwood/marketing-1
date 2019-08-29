const data = [
    {
        text: "Opportunity",
        example: "Life's chances are no longer limiting growth, understanding, and compassion..."
    },
    {
        text: "Technology",
        example: "Utilizing today's latest technology to mentor and empower our fellow man..."
    },
    {
        text: "Growth",
        example: "Providing the opportunity to help your world in a positive and life changing way..."
    },
];

const card = document.querySelector(".containerTwo");

data.forEach(data => {
    card.appendChild(createCard(data.text, data.example));
});

function createCard (text, example) {
    const card = document.createElement("div");
        const cardSection = document.createElement("div");
            const cardText = document.createElement("h1");
            const buttonOpen = document.createElement("span");
            const pContainer = document.createElement("div");
                const cardExample = document.createElement("p");

    card.appendChild(cardSection);
    cardSection.appendChild(cardText);
    card.appendChild(buttonOpen);
    cardSection.appendChild(pContainer);
    pContainer.appendChild(cardExample);

    card.classList.add("card")
    cardSection.classList.add("card-open")
    buttonOpen.classList.add("expandButton")
    pContainer.classList.add("p-container")

    const open = "\u2b9f";
    cardText.textContent = text;
    cardExample.textContent = example;
    buttonOpen.textContent = open;

    buttonOpen.addEventListener("click", () => {
        card.classList.toggle("toggle-on");
        pContainer.classList.toggle("p-container-open");
    })
    return card
}