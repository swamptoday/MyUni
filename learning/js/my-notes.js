const notesBody = document.querySelector('#notesBody');

var cookies = document.cookie.split(';');
if(cookies.length > 1)
{
    for(var i = 0; i < (cookies.length - 1); i++)
    {
        var note = '';
        var fullcookie = cookies[i];
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
