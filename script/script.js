function game() {
    let randomizer = function(max, min) {
        return Math.trunc(Math.random() * max) + min;
    };
    let randNum = randomizer(100, 1);
    console.log(randNum);
    let userInt = function() {
        let userNumber = prompt('Угадай число от 1 до 100', 100);
        if (userNumber === null) {
            alert('Bye-bye!');
            return;
        }else if (userNumber > randNum) {
            alert('Загаданное число меньше');
        } else if (userNumber < randNum) {
            alert('Загаданное число больше');
        } else if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert(' Введи число от 1 до 100');
        } else if (+userNumber === +randNum) {
            alert('Вы победили!');
            return;
        }
        userInt();
    };
    console.dir(userInt);
    userInt();
}
game();
