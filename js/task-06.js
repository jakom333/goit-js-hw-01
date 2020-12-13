let total = 0;

do {
    let = userInput = prompt('Введите число');
    if (userInput === null) {
        alert(`Общая сумма чисел равна ${total}`)
        break;
    }

    userInput = Number(userInput);
    total += userInput;
} while (true);