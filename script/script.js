let randomizer = function(max, min) {
    return Math.trunc(Math.random() * max) + min;
};
function game() {
    let count = 10;
    let randNum = randomizer(100, 1);
    console.log(randNum);
    let userInt = function() {
        let userNumber = prompt('Угадай число от 1 до 100', 100);
        if (userNumber === null) {
            alert('Bye-bye!');
            return;
        }else if ( count === 0 ) {
            const question = confirm('К сожалению, попытки закончились! Хотите сыграть ещё?');
            if (question) {
                game();
            } else {
                alert('bye-bye');
                return;
            }
        }else if (count > 0 && userNumber > randNum) {
            count--;
            alert(`Загаданное число меньше, число оставшихся попыток: ${count}`);
            userInt();
        } else if (count > 0 &&  userNumber < randNum) {
            count--;
            alert(`Загаданное число больше, число оставшихся попыток: ${count}`);
            userInt();
        } else if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert(' Введи число от 1 до 100');
            userInt();
        } else if (+userNumber === +randNum) {
            const question = confirm('Вы победили! Хотите сыграть ещё?');
            if (question) {
                game();
            } else {
                alert('bye-bye');
                return;
            }
        }
    };
    userInt();
}
 game(); 