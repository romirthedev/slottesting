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

    reels.forEach((reel, index) => {
        reel.style.transition = 'none'; // Disable transition to reset position instantly
        reel.style.transform = `translateY(0px)`; // Reset position
        setTimeout(() => {
            reel.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
            let spins = 20 + Math.floor(Math.random() * 10); // Randomize number of spins
            reel.style.transform = `translateY(-${spins * 60}px)`; // Spin the reel

            setTimeout(() => {
                const finalIcon = icons[Math.floor(Math.random() * icons.length)];
                reel.textContent = finalIcon;
                reel.style.transform = `translateY(-${reels.length * 60}px)`;

                if (index === 2) { // Show fun fact after the last reel stops
                    displayFunFact();
                }
            }, 1000); // Transition duration must match CSS transition
        }, 100); // Slight delay to stagger the spins
    });
});

function displayFunFact() {
    const funFacts = [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ];

    document.getElementById('funFact').textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
}
