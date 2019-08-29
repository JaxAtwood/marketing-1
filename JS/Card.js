const data = [
    {
        text: "Do Something Project",
        example: "Co-founders Amira and Jade Wong were sad to see so many young people letting life pass them by, so they decided to do something about it!"
    },
    {
        text: "The Passion Project",
        example: "Founder Calliope Lopez uses her passion for 'Silver Solopreneurs' (small business owners over the age of 60) to help them launch their own businesses to supplement their retirement."
    },
    {
        text: "Place for You Project",
        example: "Founder Neha Vinasipran grew up in India, and moved to the US as an adult. She found that her accent seemed to set her apart, so she created a space for others to come where they always feel welcomed."
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