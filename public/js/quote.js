const coffeeQuotes = [
    "Le café est le baume du cœur et de l'esprit. – Giuseppe Verdi",
    "Un bon café peut rendre la journée magique.",
    "Le café est une invitation à ralentir dans un monde qui va trop vite.",
    "La vie commence après un café.",
    "Le café est un câlin dans une tasse.",
    "Derrière chaque grande idée, il y a une grande tasse de café.",
    "Le parfum du café est une promesse de bonheur.",
    "Avec une tasse de café à la main, tout devient possible.",
    "Le café est plus qu'une boisson, c'est un rituel.",
    "Le café transforme un matin ordinaire en une célébration.",
    "Le café, c'est la meilleure excuse pour une bonne conversation.",
    "Chaque tasse de café est une petite pause de bonheur.",
    "Le café donne le courage de commencer une nouvelle journée.",
    "L'élégance du café réside dans sa simplicité.",
    "Le café est l'or noir des instants précieux."
  ];

  export const displayRandomCoffeeQuote = () => {
    const randomIndex = Math.floor(Math.random() * coffeeQuotes.length);
    const quoteElement = document.querySelector('.coffee-quote');
    quoteElement.textContent = `"${coffeeQuotes[randomIndex]}"`;
  }