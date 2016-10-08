$(() => {

  let  clearStorage = () => { localStorage.removeItem('test') };
  
  // подготовка вопросов
  let test = [
  {
    title: 'Вопрос первый',
    answers: [
    { answerTitle: 'Ответ первый', right: true },
    { answerTitle: 'Ответ второй', right: false },
    { answerTitle: 'Ответ третий', right: false },
    ],
  },
  {
    title: 'Вопрос второй',
    answers: [
    { answerTitle: 'Ответ первый', right: false },
    { answerTitle: 'Ответ второй', right: true },
    { answerTitle: 'Ответ третий', right: false },
    ],
  },
  {
    title: 'Вопрос третий',
    answers: [
    { answerTitle: 'Ответ первый', right: false },
    { answerTitle: 'Ответ второй', right: false },
    { answerTitle: 'Ответ третий', right: true },
    ],
  },
  ];

  // запись в local storage
  let readyTest = JSON.stringify(test),
  localTest = localStorage.setItem("test", readyTest);

  // выгрузка из local storage
  let loadTest = localStorage.getItem("test"),
  takeTest = JSON.parse(loadTest);

  // подготовка шаблона
  let html = $('#tmpl').html(),
  content = tmpl(html, {
    data: test
  });

  $('body').append(content);

  // проверка checkbox
  $('input:checkbox').on( 'click', () => {
    $(this).parent().siblings().children().each(function(){
      ($(this).attr('disabled')) ? $(this).attr('disabled', false) : $(this).attr('disabled', true);
    });
  });
  
  // проверка результатов
  $('#check').on('click', (e) => {
    e.preventDefault();
    let rightAnswers = [];
    let getRightAnswers = () => {
      for (let i = 0; i < takeTest.length; i++) {
        let testAnswers = takeTest[i].answers;
        for (let j = 0; j < testAnswers.length; j++) {
          let currentAnswer = takeTest[i].answers[j].right;
          rightAnswers.push(currentAnswer);
        }
      }
    };

    // запись результатов в массив
    let givenAnswers = [];
    let getGivenAnswers = () => {
      $('input:checkbox').each(function () {
        ($(this).prop('checked')) ? givenAnswers.push(true) : givenAnswers.push(false);
      });
    };

    // проверка правильных ответов
    let answered = 0;
    let check = () => {
      for (let i = 0; i < rightAnswers.length; i++) {
        if (rightAnswers[i] === true) {
          if (rightAnswers[i] === givenAnswers[i]) {
            answered++;
          }
        }
      }
    };

    getRightAnswers();
    console.log(`Правильный ответ ${rightAnswers}`);

    getGivenAnswers();
    console.log(`Ваш ответ ${givenAnswers}`);

    check();

    // модальное окно
    let modal;
    modal = (answered == takeTest.length) ? ('<div class="modal"><div class="modal-inner"><h1>Тест пройден!</h1><a class="center-block btn btn-primary" id="exit">Выход</a></div></div>') : ('<div class="modal"><div class="modal-inner"><h1>Тест не пройден!</h1><a class="center-block btn btn-primary" id="exit">Выход</a></div></div>');

    $('body').append(modal);

    $('#exit').on('click', () => {
      $('input:checkbox').prop('checked', false).prop('disabled', false);
      $('.modal').remove();
      clearStorage();
      console.clear();
      return false;
    });

  });


// функция pow, аналогичная Math.pow

  let number = +prompt(`Введите число ${""}`);
  console.log(`Число = ${number}`);
  let power = +prompt(`Введите степень ${""}`);
  console.log(`Степень = ${power}`);

  let mathPow = () => {
    let result = 1;
    for (let i = 0; i < power; i++) {
      result *= number;
    }
    return result;
  }

  let pow = mathPow();

  console.log(`--------------------------`);
  console.log(`Ответ = ${pow}`);


// поиск имени в массиве 

  let arrName = [];
  let name;

  for (let i = 0; i < 5; i++) {
    let name = prompt(`Введите любое имя: ${""}`);
    arrName.push(name);
    console.log(`Вы ввели имя:  ${name}`);
  }
  console.log(arrName);

  let myName = prompt(`Теперь введите Ваше имя: ${""}`);
  console.log(`----------------------------`);
  console.log(`Ваше имя: ${myName}`);
  console.log(`----------------------------`);

  let findName = (arrName) => {
    for (let i = 0; i < arrName.length; i++) {
      if (arrName[i] == myName) return true;
    } 
    return false;
  }

  if (findName(arrName)) {
    console.log(`${myName}, вы успешно вошли !`);
  } else {
    console.log(`Имя ${myName} в массиве не найдено !`);
  }

});