// script.js

// Quotes Data (same as before)
const quotes = {
    all: [
        "Keep pushing forward!",
        "Laughter is the best medicine.",
        "Wisdom begins in wonder.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "Dream big, work hard, stay focused.",
        "Why don’t skeletons fight each other? They don’t have the guts!",
        "Knowledge speaks, but wisdom listens.",
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "Believe in yourself and all that you are.",
        "Debugging is like being the detective in a crime movie where you are also the murderer."
    ],
    motivation: [
        "Keep pushing forward!",
        "Dream big, work hard, stay focused.",
        "Believe in yourself and all that you are."
    ],
    humor: [
        "Laughter is the best medicine.",
        "Why don’t skeletons fight each other? They don’t have the guts!",
        "Code is like humor. When you have to explain it, it’s bad."
    ],
    wisdom: [
        "Wisdom begins in wonder.",
        "Knowledge speaks, but wisdom listens."
    ],
    programming: [
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "Debugging is like being the detective in a crime movie where you are also the murderer."
    ]
};

let quoteCount = 0;

// DOM Elements
const quoteDisplay = document.getElementById('quote-display');
const summonBtn = document.getElementById('summon-btn');
const categorySelect = document.getElementById('category-select');
const quoteCountSpan = document.getElementById('quote-count');
const resetBtn = document.getElementById('reset-btn');

// Function to get random quote
function getRandomQuote(category) {
    const categoryQuotes = quotes[category] || quotes.all;
    return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
}

// Function to display a random quote
function displayQuote() {
    const category = categorySelect.value;
    const randomQuote = getRandomQuote(category);

    quoteDisplay.textContent = randomQuote;

    // Reset and trigger animation
    quoteDisplay.style.visibility = 'hidden';
    quoteDisplay.classList.remove('charmSwing');

    setTimeout(() => {
        quoteDisplay.style.visibility = 'visible';
        quoteDisplay.classList.add('charmSwing');
    }, 50);

    // Update quote count
    quoteCount++;
    quoteCountSpan.textContent = quoteCount;
}    

// Reset Counter
function resetCounter() {
    quoteCount = 0;
    quoteCountSpan.textContent = quoteCount;
}

// Event Listeners
summonBtn.addEventListener('click', displayQuote);
resetBtn.addEventListener('click', resetCounter);