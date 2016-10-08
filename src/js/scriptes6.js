$(() => {

  let  clearStorage = () => { localStorage.removeItem('test') };
  
  // ���������� ��������
  let test = [
  {
    title: '������ ������',
    answers: [
    { answerTitle: '����� ������', right: true },
    { answerTitle: '����� ������', right: false },
    { answerTitle: '����� ������', right: false },
    ],
  },
  {
    title: '������ ������',
    answers: [
    { answerTitle: '����� ������', right: false },
    { answerTitle: '����� ������', right: true },
    { answerTitle: '����� ������', right: false },
    ],
  },
  {
    title: '������ ������',
    answers: [
    { answerTitle: '����� ������', right: false },
    { answerTitle: '����� ������', right: false },
    { answerTitle: '����� ������', right: true },
    ],
  },
  ];

  // ������ � local storage
  let readyTest = JSON.stringify(test),
  localTest = localStorage.setItem("test", readyTest);

  // �������� �� local storage
  let loadTest = localStorage.getItem("test"),
  takeTest = JSON.parse(loadTest);

  // ���������� �������
  let html = $('#tmpl').html(),
  content = tmpl(html, {
    data: test
  });

  $('body').append(content);

  // �������� checkbox
  $('input:checkbox').on( 'click', () => {
    $(this).parent().siblings().children().each(function(){
      ($(this).attr('disabled')) ? $(this).attr('disabled', false) : $(this).attr('disabled', true);
    });
  });
  
  // �������� �����������
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

    // ������ ����������� � ������
    let givenAnswers = [];
    let getGivenAnswers = () => {
      $('input:checkbox').each(function () {
        ($(this).prop('checked')) ? givenAnswers.push(true) : givenAnswers.push(false);
      });
    };

    // �������� ���������� �������
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
    console.log(`���������� ����� ${rightAnswers}`);

    getGivenAnswers();
    console.log(`��� ����� ${givenAnswers}`);

    check();

    // ��������� ����
    let modal;
    modal = (answered == takeTest.length) ? ('<div class="modal"><div class="modal-inner"><h1>���� �������!</h1><a class="center-block btn btn-primary" id="exit">�����</a></div></div>') : ('<div class="modal"><div class="modal-inner"><h1>���� �� �������!</h1><a class="center-block btn btn-primary" id="exit">�����</a></div></div>');

    $('body').append(modal);

    $('#exit').on('click', () => {
      $('input:checkbox').prop('checked', false).prop('disabled', false);
      $('.modal').remove();
      clearStorage();
      console.clear();
      return false;
    });

  });


// ������� pow, ����������� Math.pow

  let number = +prompt(`������� ����� ${""}`);
  console.log(`����� = ${number}`);
  let power = +prompt(`������� ������� ${""}`);
  console.log(`������� = ${power}`);

  let mathPow = () => {
    let result = 1;
    for (let i = 0; i < power; i++) {
      result *= number;
    }
    return result;
  }

  let pow = mathPow();

  console.log(`--------------------------`);
  console.log(`����� = ${pow}`);


// ����� ����� � ������� 

  let arrName = [];
  let name;

  for (let i = 0; i < 5; i++) {
    let name = prompt(`������� ����� ���: ${""}`);
    arrName.push(name);
    console.log(`�� ����� ���:  ${name}`);
  }
  console.log(arrName);

  let myName = prompt(`������ ������� ���� ���: ${""}`);
  console.log(`----------------------------`);
  console.log(`���� ���: ${myName}`);
  console.log(`----------------------------`);

  let findName = (arrName) => {
    for (let i = 0; i < arrName.length; i++) {
      if (arrName[i] == myName) return true;
    } 
    return false;
  }

  if (findName(arrName)) {
    console.log(`${myName}, �� ������� ����� !`);
  } else {
    console.log(`��� ${myName} � ������� �� ������� !`);
  }

});