let massage = prompt('Введите пароль')
const ADMIN_PASSWORD = 'jqueryismyjam';

if (massage === null) {
    massage = 'Отменено пользователем!';
} else if (massage === ADMIN_PASSWORD) {
    massage = 'Добро пожаловать!';
} else {
    massage = 'Доступ запрещен, неверный пароль!';
}

alert(massage);