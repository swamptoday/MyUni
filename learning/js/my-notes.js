const notesBody = document.querySelector('#notesBody');

var cookies = document.cookie.split(';');
if(cookies.length > 1)
{
    for(var i = 0; i < cookies.length; i++)
    {
        var note = '';
        var fullcookie = cookies[i];
        if (checkonNumber(fullcookie) == 0)
        {
            continue;
        }
        else
        {
            if(i == 0)
            {
                var j = 6;
            }
            else
            {
                var j = 7;
            }
            for(j; j < fullcookie.length; j++)
            {
                note += fullcookie[j];
            }
            notesBody.innerHTML +=  '<div class="row"><div class="card noteCard"><div class="card-body"><div class="row mb-0"><div class="col-md-10 grid-margin"><div><p class="textNote">' + decodeURIComponent(note) + '</p></div></div><div class="col-md-2 grid-margin justify-content-end"><div class="deleteNote"><i class="ti-more-alt"></i></div></div></div></div></div></div>';
        }
    }
}


function checkonNumber(fullcookie)
{
    var check = ' cookieNumber';
    var check2 = 'cookieNumber';
    var j = 0;
    for(var i = 0; i < 13; i++)
    {
        if (fullcookie[i] == check[i])
        {
            j++;
        }
    }
    if (j == 12)
    {
        return 0;
    }
    else
    {
        for(var i = 0; i < 12; i++)
        {
            if (fullcookie[i] == check2[i])
            {
                j++;
            }
        }
        if (j == 12)
        {
            return 0;
        }
    }
}