const saveButton = document.querySelector('#saveButton');


saveButton.addEventListener("click", function(e)
{
    if(Cookies.get('cookieNumber') == null)
    {
        Cookies.set('cookieNumber', 1, {expires: 60 });
        setCookie();
    }
    else
    {
        setCookie();
    }
});

function setCookie() 
{
    const userInput = document.querySelector('#userNote');
    var note = userInput.value;
    if ((note != '') && (note != null))
    {
        var cookieNumber = Cookies.get('cookieNumber');
        var cookieName = 'note' + cookieNumber;
        Cookies.set(cookieName, note, {expires: 5 });
        Cookies.set('cookieNumber', (Number(cookieNumber) + Number(1)), {expires: 60 });
        userInput.value = '';
    }
}
