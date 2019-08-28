const data = [
    {
        text: "Name's Story",
        example: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at unde earum in consequatur. "
    },
    {
        text: "Name's Story",
        example: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at unde earum in consequatur. "
    },
    {
        text: "Name's Story",
        example: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at unde earum in consequatur. "
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