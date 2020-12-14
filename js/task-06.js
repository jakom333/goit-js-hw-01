let total = 0;

do {
    let userInput = prompt('Введите число');

    if (userInput === null) {
        alert(`Общая сумма чисел равна ${total}`)
        break;
    }

    userInput = parseInt(userInput);
    if (!Number.isNaN(userInput)) {
        total += userInput;
    } else {
        alert("Было введено не число, попробуйте еще раз");
    }
    
} while (true);