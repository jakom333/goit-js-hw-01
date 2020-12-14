const country = prompt('Укажите страну доставки');
const chinaDelivery = 100;
const chileDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const jamaicaDelivery = 120;

let price = 0;
let countryDelivery;

if (country === null) {
    console.log('Ошибка');
} else {
    switch (country.toLowerCase()) {
    case 'китай':
        price = chinaDelivery;
        countryDelivery = 'Китай';
        break;
    
    case "чили":
        price = chileDelivery;
        countryDelivery = 'Чили';
        break;
    
    case 'австралия':
        price = australiaDelivery;
        countryDelivery = 'Австралия';
        break;
    
    case 'индия':
        price = indiaDelivery;
        countryDelivery = 'Индия';
        break;
    
    case 'ямайка':
        price = jamaicaDelivery;
        countryDelivery = 'Ямайка';
        break;
    
    default:
        alert('В вашей стране доставка не доступна')
}
}
if (price > 0) {
console.log(`Доставка в ${countryDelivery} будет стоить ${price} кредитов`);
} else {
    console.log('Ошибка');
}
    