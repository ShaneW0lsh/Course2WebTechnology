document.addEventListener('DOMContentLoaded', () => {
    loadCards();

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                console.log('it was active in fact');
                button.classList.remove('active');
                filterDishes(null, button.parentElement.parentElement.className);
            } else {
                button.parentNode.parentNode.querySelectorAll('.filter-btn').forEach(button => {
                    button.classList.remove('active');
                });

                button.classList.add('active');

                // console.log(button.dataset.kind);
                // console.log(button.parentElement.parentElement.className);
                filterDishes(button.dataset.kind, button.parentElement.parentElement.className);
            }
            // loadCards(); // loadcards now needs to check what filters are being applied
        });
    });

    if (noSelectedDishes()) {
        hideListOfSelectedDishes();
    }
});

function filterDishes(kind, category) {
    const menuItems = document.querySelectorAll(`.items .item[dish-category="${category}"]`);
    menuItems.forEach(item => {
        console.log(item);
        console.log(item.dataset.kind);
        if (kind === item.dataset.kind || !kind) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function loadCards() {

    // document.querySelectorAll(".items").forEach(element => {
    //     element.innerHTML = "";
    // })

    for (let dish of dishes) {
        console.log(dish);
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.setAttribute('dish-data', dish.keyword);
        itemDiv.setAttribute('dish-category', dish.category);
        itemDiv.setAttribute('data-kind', dish.kind);

        const imgElement = document.createElement('img');
        imgElement.src = dish.image;
        imgElement.alt = dish.keyword;

        itemDiv.appendChild(imgElement);

        const mainInfoDiv = document.createElement('div');
        mainInfoDiv.className = 'main-info';

        const priceP = document.createElement('p');
        priceP.innerHTML = dish.price + '&#8381;';

        const nameP = document.createElement('p');
        nameP.textContent = dish.name;

        mainInfoDiv.appendChild(priceP);
        mainInfoDiv.appendChild(nameP);

        itemDiv.appendChild(mainInfoDiv);

        const formElement = document.createElement('form');

        const weightP = document.createElement('p');
        weightP.textContent = dish.mass;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Добавить';
        buttonElement.addEventListener('click', addDish);

        formElement.appendChild(weightP);
        formElement.appendChild(buttonElement);

        itemDiv.appendChild(formElement);

        const section = document.body.children[1].querySelector('.' + dish.category);
        const content = section.querySelector('.items');
        content.appendChild(itemDiv);
    }
}
