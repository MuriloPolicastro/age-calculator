/*
Se dia, mês ou ano <= 0 = Data invalida
Se dia > 31 = Dia inválido
Se mês > 12 = Mês inválido
Se ano > yearNow = Ano inválido
Se diffDay > 30 = month++
Se month === monthNow = month = 11
*/

const dayTxt = document.querySelector('#days-txt');
const monthTxt = document.querySelector('#month-txt');
const yearTxt = document.querySelector('#year-txt');
const error = document.querySelector('#error')

function calcular() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const date = `${year}-${month}-${day}`;

    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    const monthNow = dateNow.getMonth();
    const yearNow = dateNow.getFullYear();

    const diffDay = (dayNow+30) - day;
    const diffMonth = (monthNow+1) - month;
    const diffYear = yearNow - year;

    dayTxt.innerHTML = diffDay,
    monthTxt.innerHTML = diffMonth,
    yearTxt.innerHTML = diffYear;
}