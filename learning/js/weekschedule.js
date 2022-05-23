function groupText(element)
{
    document.getElementById("groupButton").innerText = element.innerText;
}

function instituteText(element)
{
    document.getElementById("instituteButton").innerText = element.innerText;
}

const Monday = document.querySelector('#Monday');
const Tuesday = document.querySelector('#Tuesday');
const Wednesday = document.querySelector('#Wednesday');
const Thursday = document.querySelector('#Thursday');
const Friday = document.querySelector('#Friday');
var i = 0;
var j = 0;
var k = 0;
var a = 1;
var h = 0;

var text1 = '';

const logFileText = async file => {
    const response = await fetch(file);
    const text = await response.text();
    console.log(text);
    for(h; h < text.length; h++)
    {
        text1 += text[h];
    }
    console.log(text1);
    get_schedule(text1);
}


logFileText('АВ-11.txt');


function get_schedule(text1)
{
    for(i; i < text1.length; i++)
    {
        if((text1[i]+text1[i+1]+text1[i+2]+text1[i+3]+text1[i+4]+text1[i+5]) == 'header')
        {
            var day_name = (text1[i+8]+text1[i+9]);
            i++;
            i = day_schedule(day_name, text1, i);
            
        }
    }
}



function day_schedule(day_name, text1, i)
{
    if(day_name == 'Пн')
    {
        var day_code = '';
        //text for monday only
        for(i; ((text1[i]+text1[i+1]+text1[i+2]+text1[i+3]+text1[i+4]+text1[i+5]) != 'header'); i++)
        {
            day_code += text1[i]; 
        }
        //title of day card
        Monday.innerHTML = '<p class="card-title day_name">Понеділок</p>';
        //class number and id
        var class_num='';
        var class_id = ' ';
        //getting class number and id from monday code
        for(j; j < day_code.length; j++)
        {
            //getting class num
            if((day_code[j]+day_code[j+1]+day_code[j+2]+day_code[j+3]) == '<h3>')
            {
                class_num = day_code[j+4];
                a++;
            }
            //getting class id and text for it
            if((day_code[j]+day_code[j+1]+day_code[j+2]) == 'id=')
            {
                var k = j+4;
                for(k; day_code[k] != '"'; k++)
                {
                    class_id +=day_code[k];
                }
                var class_text = '';
                for(k; (day_code[k]+day_code[k+1]+day_code[k+2]+day_code[k+3]+day_code[k+4]) != '</div'; k++)
                {
                    if((day_code[k]+day_code[k+1]+day_code[k+2] == 'ent'))
                    {
                        var b = k+5;
                        for(b; (day_code[b]+day_code[b+1]+day_code[b+2]+day_code[b+3]+day_code[b+4]) != '</div'; b++)
                        {
                            class_text += day_code[b];
                        }
                        break;
                    }
                }
                //function of checking the id for right card type
                check_id(class_id, class_num, day_code, Monday, class_text);
            }
            class_id='';
        }
        return (i-1);
        
    }
    if(day_name == 'Вт')
    {
        j=0;
        var day_code = '';
        //text for monday only
        for(i; ((text1[i]+text1[i+1]+text1[i+2]+text1[i+3]+text1[i+4]+text1[i+5]) != 'header'); i++)
        {
            day_code += text1[i]; 
        }
        //title of day card
        Tuesday.innerHTML = '<p class="card-title day_name">Вівторок</p>';
        //class number and id
        var class_num='';
        var class_id = ' ';
        //getting class number and id from monday code
        for(j; j < day_code.length; j++)
        {
            //getting class num
            if((day_code[j]+day_code[j+1]+day_code[j+2]+day_code[j+3]) == '<h3>')
            {
                class_num = day_code[j+4];
                a++;
            }
            //getting class id and text for it
            if((day_code[j]+day_code[j+1]+day_code[j+2]) == 'id=')
            {
                var k = j+4;
                for(k; day_code[k] != '"'; k++)
                {
                    class_id +=day_code[k];
                }
                var class_text = '';
                for(k; (day_code[k]+day_code[k+1]+day_code[k+2]+day_code[k+3]+day_code[k+4]) != '</div'; k++)
                {
                    if((day_code[k]+day_code[k+1]+day_code[k+2] == 'ent'))
                    {
                        var b = k+5;
                        for(b; (day_code[b]+day_code[b+1]+day_code[b+2]+day_code[b+3]+day_code[b+4]) != '</div'; b++)
                        {
                            class_text += day_code[b];
                        }
                        break;
                    }
                }
                //function of checking the id for right card type
                check_id(class_id, class_num, day_code, Tuesday, class_text);
            }
            class_id='';
        }
        return (i-1);
    }
    if(day_name == 'Ср')
    {
        j=0;
        var day_code = '';
        //text for monday only
        for(i; ((text1[i]+text1[i+1]+text1[i+2]+text1[i+3]+text1[i+4]+text1[i+5]) != 'header'); i++)
        {
            day_code += text1[i]; 
        }
        //title of day card
        Wednesday.innerHTML = '<p class="card-title day_name">Середа</p>';
        //class number and id
        var class_num='';
        var class_id = ' ';
        //getting class number and id from monday code
        for(j; j < day_code.length; j++)
        {
            //getting class num
            if((day_code[j]+day_code[j+1]+day_code[j+2]+day_code[j+3]) == '<h3>')
            {
                class_num = day_code[j+4];
                a++;
            }
            //getting class id and text for it
            if((day_code[j]+day_code[j+1]+day_code[j+2]) == 'id=')
            {
                var k = j+4;
                for(k; day_code[k] != '"'; k++)
                {
                    class_id +=day_code[k];
                }
                var class_text = '';
                for(k; (day_code[k]+day_code[k+1]+day_code[k+2]+day_code[k+3]+day_code[k+4]) != '</div'; k++)
                {
                    if((day_code[k]+day_code[k+1]+day_code[k+2] == 'ent'))
                    {
                        var b = k+5;
                        for(b; (day_code[b]+day_code[b+1]+day_code[b+2]+day_code[b+3]+day_code[b+4]) != '</div'; b++)
                        {
                            class_text += day_code[b];
                        }
                        break;
                    }
                }
                //function of checking the id for right card type
                check_id(class_id, class_num, day_code, Wednesday, class_text);
            }
            class_id='';
        }
        return (i-1);
    }
    if(day_name == 'Чт')
    {
        j=0;
        var day_code = '';
        //text for monday only
        for(i; ((text1[i]+text1[i+1]+text1[i+2]+text1[i+3]+text1[i+4]+text1[i+5]) != 'header'); i++)
        {
            day_code += text1[i]; 
        }
        //title of day card
        Thursday.innerHTML = '<p class="card-title day_name">Четвер</p>';
        //class number and id
        var class_num='';
        var class_id = ' ';
        //getting class number and id from monday code
        for(j; j < day_code.length; j++)
        {
            //getting class num
            if((day_code[j]+day_code[j+1]+day_code[j+2]+day_code[j+3]) == '<h3>')
            {
                class_num = day_code[j+4];
                a++;
            }
            //getting class id and text for it
            if((day_code[j]+day_code[j+1]+day_code[j+2]) == 'id=')
            {
                var k = j+4;
                for(k; day_code[k] != '"'; k++)
                {
                    class_id +=day_code[k];
                }
                var class_text = '';
                for(k; (day_code[k]+day_code[k+1]+day_code[k+2]+day_code[k+3]+day_code[k+4]) != '</div'; k++)
                {
                    if((day_code[k]+day_code[k+1]+day_code[k+2] == 'ent'))
                    {
                        var b = k+5;
                        for(b; (day_code[b]+day_code[b+1]+day_code[b+2]+day_code[b+3]+day_code[b+4]) != '</div'; b++)
                        {
                            class_text += day_code[b];
                        }
                        break;
                    }
                }
                //function of checking the id for right card type
                check_id(class_id, class_num, day_code, Thursday, class_text);
            }
            class_id='';
        }
        return (i-1);
    }
    if(day_name == 'Пт')
    {
        j=0;
        var day_code = '';
        //text for monday only
        for(i; i < text1.length; i++)
        {
            day_code += text1[i]; 
        }
        //title of day card
        Friday.innerHTML = '<p class="card-title day_name">П&#39;ятниця</p>';
        //class number and id
        var class_num='';
        var class_id = ' ';
        //getting class number and id from monday code
        for(j; j < day_code.length; j++)
        {
            //getting class num
            if((day_code[j]+day_code[j+1]+day_code[j+2]+day_code[j+3]) == '<h3>')
            {
                class_num = day_code[j+4];
                a++;
            }
            //getting class id and text for it
            if((day_code[j]+day_code[j+1]+day_code[j+2]) == 'id=')
            {
                var k = j+4;
                for(k; day_code[k] != '"'; k++)
                {
                    class_id +=day_code[k];
                }
                var class_text = '';
                for(k; (day_code[k]+day_code[k+1]+day_code[k+2]+day_code[k+3]+day_code[k+4]) != '</div'; k++)
                {
                    if((day_code[k]+day_code[k+1]+day_code[k+2] == 'ent'))
                    {
                        var b = k+5;
                        for(b; (day_code[b]+day_code[b+1]+day_code[b+2]+day_code[b+3]+day_code[b+4]) != '</div'; b++)
                        {
                            class_text += day_code[b];
                        }
                        break;
                    }
                }
                //function of checking the id for right card type
                check_id(class_id, class_num, day_code, Friday, class_text);
            }
            class_id='';
        }
        return (i-1);
    }
}

function check_id(class_id, class_num, day_code, day_name, class_text)
{
    if (class_id == 'group_full')
    {
        group_full(day_name, class_num, class_text);
    }
    else if (class_id == 'group_chys')
    {
        group_chys(day_name, class_num, class_text);
    }
    else if (class_id == 'group_znam')
    {
        group_znam(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_1_full')
    {
        sub_1_full(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_2_full')
    {
        sub_2_full(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_1_chys')
    {
        sub_1_chys(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_2_chys')
    {
        sub_2_chys(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_1_znam')
    {
        sub_1_znam(day_name, class_num, class_text);
    }
    else if (class_id == 'sub_2_znam')
    {
        sub_2_znam(day_name, class_num, class_text);
    }
}


function group_full(day_name, class_num, class_text)
{
    day_name.innerHTML += '<div class="row justify-content-center mb-4"><div class="col stretch-card transparent group_full"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">'+ class_num +'</p>' + class_text + '</div></div></div></div>'
}

function group_chys(day_name, class_num, class_text)
{
    if((document.getElementById('group_chys'+(a))) != null)
    {
        document.getElementById('group_chys'+(a)).innerText = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-12 stretch-card transparent group_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">'+ class_num +'</p><div class="group_content">' + class_text + '</div></div></div></div><div class="col-12 stretch-card transparent group_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id=group_znam"' + a + '" class="group_content"></div></div></div></div></div>';
    }
}

function group_znam(day_name, class_num, class_text)
{
    if((document.getElementById('group_znam'+(a))) != null)
    {
        document.getElementById('group_znam'+(a)).innerText = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-12 stretch-card transparent group_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">'+ class_num +'</p><div id="group_chys' + a + '" class="group_content"></div></div></div></div><div class="col-12 stretch-card transparent group_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div class="group_content">' + class_text + '</div></div></div></div></div>';
    }
}

function sub_1_full(day_name, class_num, class_text)
{
    if((document.getElementById('sub_1_full'+(a))) != null)
    {
        document.getElementById('sub_1_full'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_full"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div class="group_content">' + class_text + '</div></div></div></div><div class="col-6 stretch-card transparent sub_2_full"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div id = "sub_2_full' + a + '" class="group_content"></div></div></div></div></div>';
    }
}

function sub_2_full(day_name, class_num, class_text)
{
    if((document.getElementById('sub_2_full'+(a))) != null)
    {
        document.getElementById('sub_2_full'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_full"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div id = "sub_1_full' + a+ '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_full"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div class="group_content">' + class_text + '</div></div></div></div></div>';
    }
}

function sub_1_chys(day_name, class_num, class_text)
{
    if((document.getElementById('sub_1_chys'+(a))) != null)
    {
        document.getElementById('sub_1_chys'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div class="group_content">' + class_text + '</div></div></div></div><div class="col-6 stretch-card transparent sub_2_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div id="sub_2_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_1_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_1_znam' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_2_znam' + a + '" class="group_content"></div></div></div></div></div>';
    }
}

function sub_2_chys(day_name, class_num, class_text)
{
    if((document.getElementById('sub_2_chys'+(a))) != null)
    {
        document.getElementById('sub_2_chys'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div id="sub_1_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div class="group_content">' + class_text + '</div></div></div></div><div class="col-6 stretch-card transparent sub_1_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_1_znam' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_2_znam' + a + '" class="group_content"></div></div></div></div></div>';
    }
} 

function sub_1_znam(day_name, class_num, class_text)
{
    if((document.getElementById('sub_1_znam'+(a))) != null)
    {
        document.getElementById('sub_1_znam'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div id="sub_1_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div id="sub_2_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_1_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div class="group_content">' + class_text + '</div></div></div></div><div class="col-6 stretch-card transparent sub_2_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_2_znam' + a + '" class="group_content"></div></div></div></div></div>';
    }
}

function sub_2_znam(day_name, class_num, class_text)
{
    if((document.getElementById('sub_2_znam'+(a))) != null)
    {
        document.getElementById('sub_2_znam'+(a)).innerHTML = class_text;
    }
    else
    {
        day_name.innerHTML +=  '<div class="row justify-content-center mb-4"><div class="col-6 stretch-card transparent sub_1_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-0 class_number">' + class_num + '</p><div id="sub_1_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_chys"><div class="card card-light-blue"><div class="card-body"><p class="mb-4"></p><div id="sub_2_chys' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_1_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div id="sub_1_znam' + a + '" class="group_content"></div></div></div></div><div class="col-6 stretch-card transparent sub_2_znam"><div class="card card-tale"><div class="card-body"><p class="mb-4"></p><div class="group_content">' + class_text + '</div></div></div></div></div>';
    }
}