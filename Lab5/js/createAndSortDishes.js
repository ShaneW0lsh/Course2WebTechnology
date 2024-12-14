let dishes = [
    new Dish("gazpacho", "Гаспачо", 195, "soup", "350 г",
        "img/menu/menu/soups/gazpacho.jpg"),
    new Dish("mushroom_soup", "Грибной суп", 185, "soup", "330 г",
        "img/menu/menu/soups/mushroom_soup.jpg"),
    new Dish("norwegian_soup", "Норвежский суп", 270, "soup", "330 г",
        "img/menu/menu/soups/norwegian_soup.jpg"),
    new Dish("ramen", "Рамен", 375, "soup", "425 г",
        "img/menu/menu/soups/ramen.jpg"),
    new Dish("tomyum", "Том ям с креветками", 650, "soup", "500 г",
        "img/menu/menu/soups/tomyum.jpg"),
    new Dish("chicken", "Куриный суп", 330, "soup", "350 г",
        "img/menu/menu/soups/chicken.jpg"),
// ============================
    new Dish("friedpotatoeswithmushrooms", "Жареная картошка с грибами",
        150, "main-course", "250 г",
        "img/menu/menu/main_course/friedpotatoeswithmushrooms1.jpg"),
    new Dish("lasagna", "Лазанья", 385, "main-course", "310 г",
        "img/menu/menu/main_course/lasagna.jpg"),
    new Dish("chickencutletsandmashedpotatoes",
        "Котлеты из курицы с картофельным пюре", 225, "main-course", "280 г",
        "img/menu/menu/main_course/chickencutletsandmashedpotatoes.jpg"),
    new Dish("fishrice", "Рыбная котлета с рисом и спаржей",
        150, "main-course", "270 г",
        "img/menu/menu/main_course/fishrice.jpg"),
    new Dish("pizza", "Пицца Маргарита", 450, "main-course", "470 г",
        "img/menu/menu/main_course/pizza.jpg"),
    new Dish("shrimppasta",
        "Котлеты из курицы с картофельным пюре", 340, "main-course", "280 г",
        "img/menu/menu/main_course/shrimppasta.jpg"),
// ============================
    new Dish("saladwithegg", "Корейский салат с овощами и яйцом", 330, "salads-starters", "250 г",
        "img/menu/menu/salads_starters/saladwithegg.jpg"),
    new Dish("caesar", "Цезарь с цыпленком", 370, "salads-starters", "220 г",
        "img/menu/menu/salads_starters/caesar.jpg"),
    new Dish("caprese", "Капрезе с моцареллой", 350, "salads-starters", "235 г",
        "img/menu/menu/salads_starters/caprese.jpg"),
    new Dish("tunasalad", "Салат с тунцом", 480, "salads-starters", "250 г",
        "img/menu/menu/salads_starters/tunasalad.jpg"),
    new Dish("frenchfries1", "Картофель фри с соусом Цезарь", 280, "salads-starters", "235 г",
        "img/menu/menu/salads_starters/frenchfries1.jpg"),
    new Dish("frenchfries2", "Картофель фри с кетчупом", 260, "salads-starters", "235 г",
        "img/menu/menu/salads_starters/frenchfries2.jpg"),


// ============================
    new Dish("orangejuice", "Апельсиновый сок", 120, "beverage", "300 мл",
        "img/menu/menu/beverages/orangejuice.jpg"),
    new Dish("applejuice", "Яблочный сок", 90, "beverage", "300 мл",
        "img/menu/menu/beverages/applejuice.jpg"),
    new Dish("carrotjuice", "Морковный сок", 110, "beverage", "300 мл",
        "img/menu/menu/beverages/carrotjuice.jpg"),
    new Dish("cappuccino", "Каппучино", 180, "beverage", "300 мл",
        "img/menu/menu/beverages/cappuccino.jpg"),
    new Dish("greentea", "Зеленый чай", 100, "beverage", "300 мл",
        "img/menu/menu/beverages/greentea.jpg"),
    new Dish("tea", "Черный чай", 90, "beverage", "300 мл",
        "img/menu/menu/beverages/tea.jpg"),

// ============================
    new Dish("baklava", "Пахлава", 220, "desserts", "300 гр",
        "img/menu/menu/desserts/baklava.jpg"),
    new Dish("checheesecake", "Чизкейк", 240, "desserts", "125 гр",
        "img/menu/menu/desserts/checheesecake.jpg"),
    new Dish("chocolatecake", "Шоколадный торт", 270, "desserts", "140 гр",
        "img/menu/menu/desserts/chocolatecake.jpg"),
    new Dish("chocolatecheesecake", "Шоколадный чизкейк", 260, "desserts", "125 гр",
        "img/menu/menu/desserts/chocolatecheesecake.jpg"),
    new Dish("donuts", "Пончики (3 штуки)", 410, "desserts", "350 гр",
        "img/menu/menu/desserts/donuts.jpg"),
    new Dish("donuts2", "Пончики (6 штук)", 650, "desserts", "700 гр",
        "img/menu/menu/desserts/donuts2.jpg"),
];

dishes.sort((first, second) => {
    if (first.category === second.category) {
        return first.name.localeCompare(second.name);
    }
});
