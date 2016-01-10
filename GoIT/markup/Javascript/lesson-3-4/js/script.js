var elementH1 = document.createElement("H1");
elementH1.innerHTML = 'Тест по программированию';

var elementForm = document.createElement("FORM");
elementForm.setAttribute("method","post");
elementForm.setAttribute("name","questionList");

var elementP1 = document.createElement("P");
elementP1.innerHTML = '1. Вопрос №1';
var elementP2 = document.createElement("P");
elementP2.innerHTML = '2. Вопрос №2';
var elementP3 = document.createElement("P");
elementP3.innerHTML = '3. Вопрос №3';

// Первый вопрос
var elementLabel11 = document.createElement("LABEL");
elementLabel11.innerHTML = 'Вариант ответа №1';
var elementInput11 = document.createElement("INPUT");
elementInput11.setAttribute("type", "radio");
elementInput11.setAttribute("name", "question1");
elementInput11.setAttribute("value", "1A");
elementInput11.setAttribute("required", "");

var elementLabel12 = document.createElement("LABEL");
elementLabel12.innerHTML = 'Вариант ответа №2';
var elementInput12 = document.createElement("INPUT");
elementInput12.setAttribute("type", "radio");
elementInput12.setAttribute("name", "question1");
elementInput12.setAttribute("value", "1B");
elementInput12.setAttribute("required", "");

var elementLabel13 = document.createElement("LABEL");
elementLabel13.innerHTML = 'Вариант ответа №3';
var elementInput13 = document.createElement("INPUT");
elementInput13.setAttribute("type", "radio");
elementInput13.setAttribute("name", "question1");
elementInput13.setAttribute("value", "1C");
elementInput13.setAttribute("required", "");
//---------------------------------------------------
// Второй вопрос
var elementLabel21 = document.createElement("LABEL");
elementLabel21.innerHTML = 'Вариант ответа №1';
var elementInput21 = document.createElement("INPUT");
elementInput21.setAttribute("type", "radio");
elementInput21.setAttribute("name", "question2");
elementInput21.setAttribute("value", "2A");
elementInput21.setAttribute("required", "");

var elementLabel22 = document.createElement("LABEL");
elementLabel22.innerHTML = 'Вариант ответа №2';
var elementInput22 = document.createElement("INPUT");
elementInput22.setAttribute("type", "radio");
elementInput22.setAttribute("name", "question2");
elementInput22.setAttribute("value", "2B");
elementInput22.setAttribute("required", "");

var elementLabel23 = document.createElement("LABEL");
elementLabel23.innerHTML = 'Вариант ответа №3';
var elementInput23 = document.createElement("INPUT");
elementInput23.setAttribute("type", "radio");
elementInput23.setAttribute("name", "question2");
elementInput23.setAttribute("value", "2C");
elementInput23.setAttribute("required", "");
//---------------------------------------------------
// Третий вопрос
var elementLabel31 = document.createElement("LABEL");
elementLabel31.innerHTML = 'Вариант ответа №1';
var elementInput31 = document.createElement("INPUT");
elementInput31.setAttribute("type", "radio");
elementInput31.setAttribute("name", "question3");
elementInput31.setAttribute("value", "3A");
elementInput31.setAttribute("required", "");

var elementLabel32 = document.createElement("LABEL");
elementLabel32.innerHTML = 'Вариант ответа №2';
var elementInput32 = document.createElement("INPUT");
elementInput32.setAttribute("type", "radio");
elementInput32.setAttribute("name", "question3");
elementInput32.setAttribute("value", "3B");
elementInput32.setAttribute("required", "");

var elementLabel33 = document.createElement("LABEL");
elementLabel33.innerHTML = 'Вариант ответа №3';
var elementInput33 = document.createElement("INPUT");
elementInput33.setAttribute("type", "radio");
elementInput33.setAttribute("name", "question3");
elementInput33.setAttribute("value", "3C");
elementInput33.setAttribute("required", "");
//---------------------------------------------------

var elementSubmit = document.createElement("INPUT");
elementSubmit.setAttribute("type", "submit");
elementSubmit.setAttribute("value", "Проверить мои результаты");

document.body.appendChild(elementH1);
document.body.appendChild(elementForm);
elementForm.appendChild(elementP1);

elementForm.appendChild(elementLabel11);
elementLabel11.insertBefore(elementInput11, elementLabel11.childNodes[0]);
elementForm.appendChild(elementLabel12);
elementLabel12.insertBefore(elementInput12, elementLabel12.childNodes[0]);
elementForm.appendChild(elementLabel13);
elementLabel13.insertBefore(elementInput13, elementLabel13.childNodes[0]);
elementForm.appendChild(elementP2);
elementForm.appendChild(elementLabel21);
elementLabel21.insertBefore(elementInput21, elementLabel21.childNodes[0]);
elementForm.appendChild(elementLabel22);
elementLabel22.insertBefore(elementInput22, elementLabel22.childNodes[0]);
elementForm.appendChild(elementLabel23);
elementLabel23.insertBefore(elementInput23, elementLabel23.childNodes[0]);
elementForm.appendChild(elementP3);
elementForm.appendChild(elementLabel31);
elementLabel31.insertBefore(elementInput31, elementLabel31.childNodes[0]);
elementForm.appendChild(elementLabel32);
elementLabel32.insertBefore(elementInput32, elementLabel32.childNodes[0]);
elementForm.appendChild(elementLabel33);
elementLabel33.insertBefore(elementInput33, elementLabel33.childNodes[0]);
elementForm.appendChild(elementSubmit);
