const menu = [{
        id: 1,
        title: "burger",
        category: "Fast Food",
        price: "1",
        img: "./images/burger.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
    {
        id: 2,
        title: "fish fingers",
        category: "Non-Veg",
        price: "4",
        img: "./images/fish-finger.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
    {
        id: 3,
        title: "sandwich",
        category: "Fast Food",
        price: "1",
        img: "./images/sandwich.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
    {
        id: 4,
        title: "fried chicken",
        category: "Non-Veg",
        price: "4",
        img: "./images/fried-chicken.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
    {
        id: 5,
        title: "pizza",
        category: "Fast Food",
        price: "2",
        img: "./images/pizza.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
    {
        id: 6,
        title: 'coffee',
        category: 'Beverages',
        price: '1',
        img: './images/coffee.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },

    {
        id: 7,
        title: 'kofta',
        category: 'Veg',
        price: '3',
        img: './images/kofta.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.',
    },
    {
        id: 8,
        title: 'burritos',
        category: 'Veg',
        price: '4',
        img: './images/burritos.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.',
    },
    {
        id: 9,
        title: 'masala chai',
        category: 'Beverages',
        price: '1',
        img: './images/masala-chai.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.',
    },
    {
        id: 10,
        title: 'dal makhani',
        category: 'Veg',
        price: '3',
        img: './images/dal-makhani.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore molestias porro inventore sapiente! Eos provident suscipit, id porro corrupti corporis excepturi ea ad ab reiciendis mollitia dolore enim expedita.",
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}$</h4>
            </header>
            <p class="item-text">${item.desc}
            </p>
        </div>
    </article>`;

    });

    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = function() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        };
        return values;
    }, ['all']);

    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");

    // console.log(categoryBtns);
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');

    //  filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            // console.log(category);
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
};