'use strict';


import popup from './modules/popup';
import sendForm from './modules/sendForm';
import accordCalc from './modules/accordCalc';
import accord from './modules/accord';
import btnMore from './modules/btnMore';
import chooseReg from './modules/chooseReg';


popup();

const question = document.getElementById('question__input');

question.addEventListener('input', () => {
  window.globalObj["user_question"] = question.value;
});
document.body.addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm(event.target);
});

accord('accordion');
accord('accordion-two');
chooseReg('input[type="tel"]', /[^0-9+]/g);
chooseReg('.distance', /[^0-9]/g);
chooseReg('input[name="user_name"]', /[^а-яА-ЯёЁ\ ]/g);
btnMore();
accordCalc();