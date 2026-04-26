let bttn = document.querySelector('#button');
let dialouge = document.querySelector('.quotes');
let movie = document.querySelector('.person');

const quotes = [
    { quotes: "Call me by your name and I'll call you by mine.", person: "Call Me by Your Name" },
    { quotes: "Yes, I wear the ring... I'm who I am, I'm not ashamed", person: "BIRDCAGE" },
    { quotes: "Love him and let him love you. Do you think anything else under heaven really matters?", person: "James Baldwin" },
    { quotes: "I don't know what I am. I think I might be nothing.", person: "BoJack Horseman" },
    { quotes: "Kiss me. Now. In front of all these people.", person: "Les" },
    { quotes: "It will pass.", person: "Fleabag" },
    { quotes: "It's either nature or nurture.", person: "Weekend" }
];

bttn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    dialouge.innerText = quotes[random].quotes;
    movie.innerText = quotes[random].person;
});