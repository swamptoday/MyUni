const mediaQuery = window.matchMedia('(min-width: 360px) and (max-width: 1080px)');
const changeplaces = document.querySelector('#changeplaces');
const manager = document.querySelector('#manager');
const validation = document.querySelector('#validation');

var text = "<div class='col-lg-6 ml-5'><h5 class='text-secondary'>Хочете з нами співпрацювати?</h5><p class='mb-2 fs-8 fw-bold'>Рекламодавцям:</p><p style='font-size:18px; '>Бажаєте заохочити студентську аудиторію до ваших послуг і товарів та не знаєте як це зробити? <br /> Ми зробимо це за вас!</p><p style='font-size:20px; font-weight: bold;'>Роботодавці?</p><p style='font-size:18px;'> Шукаєте молодих працівників для вашої компанії та готові прийняти студентів на роботу?<br />Не зволікайте та <a href='#contacts'>контактуйте</a> нам!</p><p style='font-size:20px; font-weight: bold;'>Курси для студентів?</p><p style='font-size:18px;'>Ваші курси напрямлені на студентів та можуть допомогти їм стати досвідченішими? <br />Не зволікайте та <a href='#contacts'>контактуйте</a> нам!</p><p style='font-size:20px; font-weight: bold;'>Заклади поруч з університетом?</p><p style='font-size:18px;'>Готові надати студентам потрібні їм товари та хочете розширити клієнтську базу?<br />Не зволікайте та <a href='#contacts'>контактуйте</a> нам!</p></div>";
if(mediaQuery.matches)
    {
        changeplaces.innerHTML = text + changeplaces.innerHTML;

    }
else
{
    changeplaces.innerHTML = changeplaces.innerHTML + text;
}