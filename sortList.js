const draggable_list = document.querySelector('.draggable-list');
const check = document.getElementById('check');

const songTitles = [
    'The Beast',
    "Take Off Your Shoes",
    "All Good People",
    "Out Of The BadLands",
    "Somewhere In The Desert",
    "Come Back Alive",
    "I Go To Work",
    "Never Coming Back",
    "Goddamn Shame",
    "Last Words",
    "Pay No Rent",
    "Shadows Of Vegas"
]

// Store listItems
const listItems = [
]
let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...songTitles]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((song, index) => {
        // console log song order
        console.log(song)
        const listItem = document.createElement('li');


        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable=true">
        <p class="song-name">${song}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    })
}