let currentDishPriceSum = 0;

let currentSelectedDishes = {
    soup: null,
    mainCourse: null,
    beverage: null,
    saladsStarters: null,
    desserts: null
};

let dishMapper = {
    'soup': 'soup',
    'main-course': 'mainCourse',
    'beverage': 'beverage',
    'desserts': 'desserts',
    'salads-starters': 'saladsStarters'
}

function addDish(event) {
    event.preventDefault();

    document.querySelector('.nothing').hidden = true;

    const dishItem = event.currentTarget.parentNode.parentNode;
    const dishCategory = dishItem.getAttribute('dish-category');

    currentSelectedDishes[dishMapper[dishCategory]] = dishItem.getAttribute('dish-data');

    const inputTag = document.querySelector('.selected-' + dishCategory);
    console.log(dishCategory);
    inputTag.setAttribute('value', dishItem.getAttribute('dish-data'));

    const itemsInThisCategory = document.querySelectorAll(`.items .item[dish-category="${dishCategory}"]`);
    itemsInThisCategory.forEach(item => item.classList.remove('selected-product'));
    console.log(itemsInThisCategory);
    dishItem.classList.add('selected-product');

    updateSelectedDishListView();
}

function updateSelectedDishListView() {

    if (noSelectedDishes()) {
        hideListOfSelectedDishes();
        return;
    }

    unhideListOfSelectedDishes();

    currentDishPriceSum = 0;
    Object.values(currentSelectedDishes).forEach(value => {
        const dish = dishes.find(dish => dish.keyword === value);
        if (dish === undefined) return;
        const elementWithThisCategory = document.querySelector(`.chosen[category='${dish.category}']`);
        elementWithThisCategory.querySelector('p').innerText = dish.name + ' - ' + dish.price;
        currentDishPriceSum += dish.price;
    });

    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);
}

function hideListOfSelectedDishes() {
    const chosenElements = document.querySelector('.user-order').querySelectorAll('.hid');
    chosenElements.forEach(element => {
        element.hidden = true;
    });

    document.querySelector('.nothing').hidden = false;
}

function unhideListOfSelectedDishes() {
    const chosenElements = document.querySelector('.user-order').querySelectorAll('.hid');
    chosenElements.forEach(element => {
        element.hidden = false;
    });
}

function noSelectedDishes() {
    return Object.values(currentSelectedDishes).every(value => value === null);
}

function handleReset() {
    document.querySelectorAll('.sel').forEach(tag => tag.setAttribute('value', ''));
    Object.keys(currentSelectedDishes).forEach(key => {
        if (currentSelectedDishes[key] !== null) {
            currentSelectedDishes[key] = null;
        }
    });

    const chosenDivs = document.querySelectorAll('.chosen');

            chosenDivs.forEach(div => {
                const pTag = div.querySelector('p');

                if (pTag) {
                    pTag.textContent = 'Не выбрано';
                }
            });

    updateSelectedDishListView();
    currentDishPriceSum = 0;
    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);

    const itemsInThisCategory = document.querySelectorAll(`.items .item`);
    console.log(itemsInThisCategory);
    itemsInThisCategory.forEach(item => item.classList.remove('selected-product'));
}

function checkOrder() {
    const missingItems = [];
    if (Object.values(currentSelectedDishes).every(dish => dish === null)) {
        missingItems.push('Ничего не выбрано. Выберите блюда для заказа');
        return missingItems;
    }
    if (!currentSelectedDishes.soup && !currentSelectedDishes.mainCourse) {
        missingItems.push('Выберите суп или главное блюдо');
        return missingItems;
    }
    if (currentSelectedDishes.soup && !currentSelectedDishes.mainCourse && !currentSelectedDishes.saladsStarters) {
        missingItems.push('Выберите главное блюдо/салат/стартер');
        return missingItems;
    }
    if ((currentSelectedDishes.saladsStarters || currentSelectedDishes.desserts || currentSelectedDishes.beverage) && !currentSelectedDishes.soup && !currentSelectedDishes.mainCourse) {
        missingItems.push('Выберите главное блюдо');
        return missingItems;
    }
    if (!currentSelectedDishes.beverage) {
        missingItems.push('Выберите напиток');
    }
    return missingItems;
}

function showNotification(missingItems) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <p>${missingItems.join('<br>')}</p>
        <button id="ok-button">
            Окей <span class="thumbs-up">👍</span>
        </button>
    `;
    document.body.appendChild(notification);

    const okButton = notification.querySelector('#ok-button');
    okButton.addEventListener('click', () => {
        document.body.removeChild(notification);
    });

    okButton.addEventListener('mouseover', () => {
        okButton.style.backgroundColor = 'tomato';
        okButton.style.color = 'white';
    });

    okButton.addEventListener('mouseout', () => {
        okButton.style.backgroundColor = '#007bff';
        okButton.style.color = 'white';
    });
}

const orderForm = document.querySelector('.order-form form');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const missingItems = checkOrder();
    if (missingItems.length > 0) {
        showNotification(missingItems);
    } else {
        orderForm.submit();
    }
});