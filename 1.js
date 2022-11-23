const celcius_degree = Number.parseInt(prompt("Введите температуру, C\xB0:"));
const fahrenheit_degree = (9 / 5) * celcius_degree + 32;

alert(`C\xB0: ${celcius_degree}, F\xB0: ${Math.round(fahrenheit_degree * 10) / 10}`);
