const country = prompt('Укажите страну доставки');
const china = 'Китай'
const chile = 'Чили'
const australia = 'Австралия'
const india = 'Индия'
const jamaica = 'Ямайка'
const chinaDelivery = 100;
const chileDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const jamaicaDelivery = 120;

const userCountry = country.toLowerCase();

let price = 0;
let countryDelivery = userCountry;

switch (userCountry) {
    case 'китай':
        price = chinaDelivery;
        countryDelivery = china;
        break;
    
    case "чили":
        price = chileDelivery;
        countryDelivery = chile;
        break;
    
    case 'австралия':
        price = australiaDelivery;
        countryDelivery = australia;
        break;
    
    case 'индия':
        price = indiaDelivery;
        countryDelivery = india;
        break;
    
    case 'ямайка':
        price = jamaicaDelivery;
        countryDelivery = jamaica;
        break;
    
    default:
        alert('В вашей стране доставка не доступна')
}
    console.log(`Доставка в ${countryDelivery} будет стоить ${price} кредитов`);