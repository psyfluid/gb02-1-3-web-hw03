function greet_user_console(username) {
    console.log(`Привет, ${username}!`);
}

function greet_user_alert(username) {
    alert(`Привет, ${username}!`);
}

const username = prompt("Введите ваше имя:");
greet_user_console(username);
greet_user_alert(username);
