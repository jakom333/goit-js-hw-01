let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
const droidAmount = prompt('Сколько дроидов Вы хотите купить?');

if (!+droidAmount) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = droidAmount * pricePerDroid;
    if (credits < totalPrice) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`)
    }
}