// script.js
document.getElementById('slotButton').addEventListener('click', () => {
    document.getElementById('slotMachine').classList.remove('hidden');
});

document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('slotMachine').classList.add('hidden');
});

document.getElementById('lever').addEventListener('click', () => {
    const icons = ['🍒', '🍋', '🍊', '🍇', '🍉', '🔔', '⭐', '💎'];
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];

    reels.forEach(reel => {
        reel.style.transform = `rotateX(${Math.random() * 3600}deg)`;
    });

    setTimeout(() => {
        reels.forEach(reel => {
            reel.textContent = icons[Math.floor(Math.random() * icons.length)];
        });

        const funFacts = [
            "Honey never spoils.",
            "Bananas are berries, but strawberries aren't.",
            "A group of flamingos is called a 'flamboyance'.",
            "Octopuses have three hearts.",
            "The Eiffel Tower can be 15 cm taller during the summer."
        ];

        document.getElementById('funFact').textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
    }, 1000); // Spin duration
});
