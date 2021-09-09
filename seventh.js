const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5',
];
console.table(cards);
const cardToRemove = 'карточка-3';
const index = cards.indexOf(cardToRemove);

cards.splice(index, 1);
console.table(cards);