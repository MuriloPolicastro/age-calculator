/*
Se dia, mês ou ano <= 0 = Data invalida
Se dia > 31 = Dia inválido
Se mês > 12 = Mês inválido
Se ano > yearNow = Ano inválido
Se diffDay > 30 = month++
Se month === monthNow = month = 11

Se ano 
*/

const dayTxt = document.querySelector('#days-txt');
const monthTxt = document.querySelector('#month-txt');
const yearTxt = document.querySelector('#year-txt');
const error = document.querySelector('#error')

const dateNow = new Date();
const dayNow = dateNow.getDate();
const monthNow = dateNow.getMonth();
const yearNow = dateNow.getFullYear();

/*
function calcular(day, month, year) {
    let diffDay = (dayNow+30) - day;
    let diffMonth = (monthNow+1) - month;
    let diffYear = yearNow - year;

    if (diffDay >= 30 ) {
        dayTxt.innerHTML = diffDay - 30;
    } else {
        dayTxt.innerHTML = diffDay;
    }
    if (dayTxt == dayNow && month == (monthNow+1)) {
        monthTxt.innerHTML = 11;
    } else if (month == (monthNow+1)) {
        monthTxt.innerHTML = 0;
        diffYear++;
    } else if (diffMonth < 0) {
        monthTxt.innerHTML = 12 + diffMonth;
    } else {
        monthTxt.innerHTML = diffMonth;
    }
    if (month > monthNow) {
        diffYear--;
    }

    yearTxt.innerHTML = diffYear;
    console.log(dateNow)
}
*/
function formatDate (date) {
    const d = date.getDate();
    const mo = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${d}/${mo}/${y}`;
}

function calcular (day, month, year) {
    const stringDate = `${year}-${month}-${day}`;
    const birthDate = new Date(stringDate);
    const dateNow = new Date();
    const dB = birthDate / 1000 / 60 / 60 / 24 / 30 / 12;
    const dN = dateNow / 1000 / 60 / 60 / 24 / 30 / 12;
    const res = dN - dB;
    
    window.alert(res);
}

function executar() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (day <= 0 || month <= 0 || year <=0) return window.alert ('Data inválida');
    if (day > 31) return window.alert ('Dia inválido');
    if (month > 12) return window.alert ('Mês inválido');
    if (year > yearNow) {
        window.alert ('Ano inválido');
    } else {
        calcular(day, month, year);
    }
}