/*
    let name = "John";
    name = prompt("Как ваше имя?");
    alert("Привет, " + name + "!");
*/

// let a = prompt("Введите первое число:");
// let b = prompt("Введите второе число:");

// a = Number(a);
// b = Number(b);

// alert(Number(a) + Number(b));
// alert(a + b);

// Создание константы
// const pi = 3.14;
// pi = 3.15;

// let a = pi * 2 * 5.14;

// console.log(a);

// let a = 19; // 16
// let b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);
// let result = (a + b) * 2 / a;
// console.log(result);


// let dark_theme = false;

// console.log("true && true = " + (true && true));
// console.log("true && false = " + (true && false));
// console.log("false && true = " + (false && true));
// console.log("false && false = " + (false && false));

// console.log("true || true = " + (true || true));
// console.log("true || false = " + (true || false));
// console.log("false || true = " + (false || true));
// console.log("false || false = " + (false || false));

// console.log("!true = " + (!true));
// console.log("!false = " + (!false));

// console.log(100 > 5);
// console.log(100 >= 5);
// console.log(100 < 5);
// console.log(100 <= 5);

// console.log(100 == "100");
// console.log(100 === "100");

// console.log(100 != "99");
// console.log(100 !== "100");

// let is_admin = confirm("Вы администратор?");

// if (is_admin) {
//     alert('Привет администратор');
//     console.log('Это был админ');
// } else {
//     alert('Привет пользователь');
//     console.log('Это был обычный пользователь');
// }

// console.log('Продолжили выполнение кода');

// let a = 5;
// let b = +prompt('Введите число');

// if (a > b) {
//     alert("Число A больше числа B");
// } else if (a < b) {
//     alert("Число A меньше числа B");
// } else if (a == b) {
//     alert("Число A равно числу B");
// }

// let age = +prompt('Введите возраст');

// if (age < 18) {
//     alert('Ребенок');
// } else if (age < 45) {
//     alert('Молодой');
// } else if (age < 60) {
//     alert('Средний');
// } else if (age < 75) {
//     alert('Пожилой');
// } else if (age < 91) {
//     alert('Старик');
// } else {
//     alert('Долголетие');
// }

// let week = +prompt('Введите число от 1 до 7');

// if (week == 1) {
//     alert('Понедельник');
// } else if (week == 2) {
//     alert('Вторник');
// } else if (week == 3) {
//     alert('Среда');
// } else if (week == 4) {
//     alert('Четверг');
// } else if (week == 5) {
//     alert('Пятница');
// } else if (week == 6) {
//     alert('Суббота');
// } else if (week == 7) {
//     alert('Воскресенье');
// } else {
//     alert('Введен некорректный день недели!');    
// }

// let week = +prompt('Введите число от 1 до 7');

// switch (week) {
//     case 1:
//         alert('Понедельник');
//         break;
//     case 2:
//         alert('Вторник');
//         break;
//     case 3:
//         alert('Среда');
//         break;
//     case 4:
//         alert('Четверг');
//         break;
//     case 5:
//         alert('Пятница');
//         break;
//     case 6:
//         alert('Суббота');
//         break;
//     case 7:
//         alert('Воскресенье');
//         break;
//     default:
//         alert('Введен некорректный день недели!');
//         break;
// }

// let mounth = +prompt('Месяц 1-12');

// switch (mounth) {
//     case 12:
//     case 1:
//     case 2:
//         alert('Зима');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Лето');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Весна');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осень');
//         break;
//     default:
//         alert('Такого месяца не существует');
//         break;
// }

// Спрашиваем первое число
// Спрашиваем второе число
// Спрашиваем оператор + - / *
// Выводит результат операции
// Проверяйте ДЕЛЕНИЕ НА НОЛЬ

// let a = +prompt('Введите число 1');
// let b = +prompt('Введите число 2');
// let operator = prompt('Введите оператор: +, -, * или /');

// switch (operator) {
//     case '+':
//         alert('a + b = ' + (a + b));
//         break;
//     case '-':
//         alert('a - b = ' + (a - b));
//         break;
//     case '*':
//         alert('a * b' + (a * b));
//         break;
//     case '/':
//         if (b !== 0) {
//             alert('a / b = ' + (a / b));
//         } else {
//             alert('На ноль делить нельзя');
//         }
//         break;
//     default:
//         alert('Неизвестный оператор');
// }

// let a = 0;

// while(a < 500) {
//     a = a + 1;
//     console.log(a);
// }

// console.log('Продолжаем выполнение кода');

// let a = 501;

// while(a > 1) {
//     a = a - 1;
//     console.log(a);
// }

// let a = 1;
// let sum = 0;

// while (a <= 10) {
//     if (a % 2 == 0)
//         sum = sum + a;
//     a = a + 1;
// }

// console.log('Сумма чисел от 1 до 10 равна ' + sum);

// let a = -9;

// do {
//     alert(a);
//     a = a - 1;
// } while(a > 0);

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     // sum = sum + i;
//     sum += i;
// }

// console.log('Сумма чисел от 1 до 100 равна ' + sum);

let names = ["John", "Max", "Alice", "Bob"];

// for (let i = 0; i < names.length; i++) {
//     alert(names[i]);
// }

// for (name of names) {
//     alert(name);
// }

let marks = [[5, 5, 4], [4, 4, 5], [[11, 100, 99, 27], 4, 3], [2, 2, 2]];

marks[3][0] = 5;

// names.push("Bob");
// names[2] = "Ivan";
// names[3] = "Alice";
// names[10] = "Bob";
