// let login = prompt('Кто там?', '');

// if (login === 'Админ') {
//     let pass = prompt('Пароль', '');

//     if (pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (login === '' || login === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }









for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, затем 3, 5, 7, 9
  }

