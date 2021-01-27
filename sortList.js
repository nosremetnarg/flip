const draggable_list = document.getElementById('draggable-list');
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
const listItems = [];
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
        <div class="draggable" draggable="true">
        <p class="song-name">${song}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragOver(e) {
    e.preventDefault();
}
function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over')
}

// Swap list items that are drag/drop
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

}

function dragEnter() {
    this.classList.add('over');
}
function dragLeave() {
    this.classList.remove('over');

}

// Check the order of list items
function checkOrder() {
    listItems.forEach((listItem, index) => {
        const songName = listItem.querySelector('.draggable').innerText.trim();
        console.log(`yea ${songTitles}`);
         
        if (songName !== songTitles[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    })
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', dragStart);
        })

        dragListItems.forEach(item => {
            item.addEventListener('dragover', dragOver);
            item.addEventListener('drop', dragDrop);
            item.addEventListener('dragenter', dragEnter);
            item.addEventListener('dragleave', dragLeave);

        })
}

check.addEventListener('click', checkOrder);