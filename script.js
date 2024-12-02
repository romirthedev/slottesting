// script.js
document.getElementById('slotButton').addEventListener('click', () => {
    document.getElementById('slotMachine').classList.remove('hidden');
});

document.getElementById('lever').addEventListener('click', () => {
    const icons = ['🍒', '🍋', '🍊', '🍇', '🍉', '🔔', '⭐', '💎'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.textContent = icons[Math.floor(Math.random() * icons.length)];
    reel2.textContent = icons[Math.floor(Math.random() * icons.length)];
    reel3.textContent = icons[Math.floor(Math.random() * icons.length)];

    const funFacts = [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ];

    document.getElementById('funFact').textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
});
