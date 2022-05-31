function groupText(element)
{
    document.getElementById("groupButton").innerText = element.innerText;
}

function instituteText(element)
{
    document.getElementById("instituteButton").innerText = element.innerText;
}

const showButton = document.querySelector('#showButton');

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

showButton.addEventListener("click", buttonClick);

function buttonClick()
{
    const groupButton = document.querySelector('#groupButton');
    var schedule_file = groupButton.innerText;
    text1 = '';
    i = 0;
    j = 0;
    k = 0;
    a = 1;
    h = 0;
    logFileText(schedule_file + '.txt');
}



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
        document.getElementById('group_chys'+(a)).innerHTML = class_text;
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
        document.getElementById('group_znam'+(a)).innerHTML = class_text;
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


const insts = document.querySelectorAll('.insts');

var ist_cbt = new Map();

ist_cbt.set("ІАПО",["УАі-42","УАі-22","УАі-31","УАі-32","УАі-41","МЕУПі-11","УААМі-11","УАЕКі-11","УАі-11","УАі-21","УАі-21f"]);
ist_cbt.set("ІАРД",["ДЗ-44","ДЗЗВ-11","ДЗМ-21","ДС-11","РМ-41","РМРТ-11","АРРП-11","ДЗ-41","ДЗ-42","ДЗ-43","АР-29","АР-11","АР-12","АР-25","АР-26","АР-27","АР-28","АР-31","АР-32","АР-33","АРБС-11","АРБС-11f","АРБС-12","АРБС-13","АРДА-11","АРМ-21","АРМ-22","ДС-12","ДС-13","ДС-31","ДС-32","ДС-33","ДС-34","РМ-11","РМ-21","АР-18","АР-45","АР-46","АР-47","АР-21","АР-22","АР-23","АР-24","АР-34","АР-35","АР-36","АР-44","ДС-21","ДС-22","ДС-23","ДС-24","АР-37","АР-38","АР-39","АР-41","АР-42","АР-43","АР-15","АР-16","АР-17","АР-48","РМ-31","АРМ-23","АРМ-24","АРМ-25","АРМБ-11","АР-13","АР-14"]);
ist_cbt.set("ІБІС",["БД-13","БД-14","БД-15","БД-16","БД-17","БД-23","БД-24","БД-25","БД-26","БД-27","БД-28","БД-36","БД-41","БД-44","БД-45","БД-46","БДМ-23","БДМ-24","БДМБ-11","БДМТ-11","БДПC-11","БДПC-11f","БДПC-12","БДТГ-11","БДТК-11","ГБ-11","ГБ-21","ГБ-31","БД-31","БД-31f","БД-32","БД-33","БД-34","БД-35","БД-47","БД-48","БД-49","БДАД-11","БДВВ-11","БДМ-21","БДМ-22","ГБ-41","ГБВІ-11","ПБ-11","ПБ-21","ПБ-31","ПБ-41","БД-18","БД-19","БД-21","БД-21f","БД-22","БД-410","БД-41f","БД-38","БД-42","БД-43","БД-37","БД-39","БД-11","БД-12"]);
ist_cbt.set("ІГДГ",["ГД-13","ГД-21","ГД-22","ГД-23","ГД-31","НЗ-32","НЗ-41","НЗГІ-11","ГД-11","ГД-12","ГДКГ-11","ГДОЗ-11","ГД-32","ГД-33","ГД-41","ГД-42","ГД-43","НЗ-11","НЗ-21","НЗ-31","ГДІГ-11","ГДГТ-11","ГДЗК-11"]);
ist_cbt.set("ІГСН",["МВ-13","МВ-14","МВ-15","МВ-21","МВ-22","МВ-23","МВ-25","МВ-26","МВ-31","МВ-32","СЗ-12","СЗ-21","СЗ-22","СЗ-31","СЗ-41","СЗ-42","СК-11","СК-12","СО-41","СОВД-11","СР-11","СР-12","СР-21","СР-22","СР-31","СР-41","СРСО-11","СТ-11","СТ-21","СМ-31","СМ-41","СО-11","МВ-46","МВМВ-11","СЗ-11","СК-13","СК-21","СК-22","СО-21","СО-31","ДК-31","ДК-32","МВ-24","МВ-43","МВ-45","ДК-42","ДКІБ-11","МВ-11","МВ-12","МВ-33","МВ-34","МВ-35","МВ-36","МВ-41","МВ-42","МВ-44","ДК-41","МВ-37"]);
ist_cbt.set("ІЕСК",["АЕ-11","АВ-11","АВ-12","АВ-13","ЕЕ-22","ЕЕ-23","АВ-22","АВ-23","АВ-31","АВ-32","АВ-33","АВ-41","АВ-42","АВКВ-11","АВКВ-12","АВМ-21","АЕ-21","АЕ-31","АЕ-41","ЕЕ-11","ЕЕ-12","ЕЕ-13","ЕЕ-14","ЕЕ-15","ЕЕ-16","ЕЕ-21","ЕЕ-24","ЕЕ-31","ЕЕ-32","ЕЕ-33","ЕЕ-34","ЕЕ-41","ЕЕ-42","ЕЕ-43","ЕЕ-44","ЕЕЕБ-11","ЕЕЕЕ-11","ЕЕЕМ-11","ЕЕМ-21","ЕЕМ-22","ЕЕСС-11","ЕЕСУ-11","СЕ-31","СЕ-32","ТЕ-11","ТЕ-41","ТЕТЕ-11","СЕ-21","АВ-14","АВ-21","ТЕ-21","ТЕ-31"]);
ist_cbt.set("ІМІТ",["МП-31","МП-31f","МП-32","МП-33","МП-41","МП-42","МП-43","МПРС-11f","МПТЗ-11","ТТ-24","ТТ-31","ТТ-32","ТТ-33","ТТ-34","НГ-21","НГ-22","ТТ-41","ТТ-42","ТТОП-11","ТТОР-11","НГ-31","РТМ-11","МПТМ-11","НГ-11","ТЛ-11","ТТ-11","ТТ-12","ТТ-13","ТТ-21","МБ-41","МБ-42","МБКГ-11","МБ-13","МБ-21","МБ-22","МБ-23","МБ-31","МБ-31f","МБ-32","МБ-33","МБПХ-11","МЗ-11","МЗ-12","МЗ-21","МЗ-22","МЗ-31","МЗ-41","МЛ-21","МЛ-22","МП-11","МП-11f","МП-12","МП-13","МП-14","МП-21","МП-21f","МП-23","АТ-11","АТ-12","АТ-22","АТ-23","АТ-13","АТ-21","АТСМ-11","ТТ-14","ТТ-22","ТТ-23","АТ-31","АТ-32","АТ-33","АТ-34","АТСМ-12","МБ-11","МБ-12"]);
ist_cbt.set("ІКНІ",["ВП-11","ПЗ-23","ПЗ-24","ПЗ-25","ФЛ-31","КН-210","ІТ-11","ІТ-12","ІТ-13","ІТ-21","ІТ-22","КН-212","КН-214","КН-215","КН-216","КН-217f","КН-301","КН-412","КН-302","КН-305","ПЗ-16","ПЗ-21","ПЗ-22","КН-203","КН-204","КНУС-12","КН-310","КН-311","КН-312","КН-313","КН-315","КН-316","КН-405","КН-406","КН-407","КН-409","КН-410","КН-411","ПЗ-26","ПЗ-31","ПЗ-32","ПЗ-33","ПЗ-34","ПЗ-35","ПЗ-36","ПЗ-41","ПЗ-42","СА-13","СА-21","СА-22","СА-23","СА-31","ПЗМ-21","СА-12","СА-32","СА-41","СА-42","СААД-11","САМ-11","САМ-21","САСМ-11","КН-408","ФЛ-24","ФЛ-25","ФЛ-26","ФЛ-11","ФЛ-12","ФЛ-13","ФЛ-14","ФЛ-15","ФЛ-16","ФЛ-21","ФЛ-23","КН-401","КН-402","КН-113","КН-114","КН-115","ПЗ-43","ВПКТ-11","ФЛ-32","ФЛ-33","ФЛ-34","ФЛ-35","ФЛ-36","ФЛ-37","ФЛ-38","ФЛ-39","ФЛ-43","ФЛ-44","ФЛ-45","ФЛ-46","КН-403","ФЛ-41","ФЛ-42","ІТ-23","ІТ-31","ІТ-32","ІТ-33","ІТ-41","ІТІC-11","КН-306","КН-307","КН-308","ФЛ-47","ФЛ-48","ФЛПЛ-11","ФЛПЛ-12","ПЗ-11","ПЗ-12","ПЗ-13","ВП-12","ВП-21","ВП-22","ВП-31","ВП-32","ВП-41","ВП-42","КН-309","ІТМ-11","ІТМ-21","КН-303","КН-304","КН-211","ПЗ-44","ПЗ-45","ПЗІП-11","КН-103","КН-104","КН-105","КН-206","КН-207","КН-208","КН-209","КН-102","КН-110","КН-111","КН-112","ФЛ-27","ФЛ-28","УП-11","ПЗМ-11","СА-11","ПЗ-14","ПЗ-15","КН-101","КН-117","КН-118","КН-314","КН-119f","КН-213","ІТУП-11","КНСH-12","КНУС-11","КН-413","КН-404","КН-108","КН-109","КН-416f","КНІТ-11","КНМ-11","КНМ-21","КНСП-11","КНСH-11","КНСH-11f","КН-317f","КН-106","КН-107","КН-205","КН-201","КН-202","ФЛ-22","КН-116"]);
ist_cbt.set("ІКТА",["АВКС-11","КІ-101","КІ-102","КІ-103","КІ-104","КІ-105","КІ-106","КІ-107","КІ-108","КІ-109","КІ-210","КІ-22","КІ-23","КІ-24","КІ-25","КІ-26","КІ-27","КІ-28","КІ-29","КІ-31","КІ-32","КІ-33","КІ-34","КІ-35","КІ-43","КІ-44","КІ-45","КІ-46","КІ-47","КІ-48","КІКС-11","КІСК-11","КІСК-12","КВСП-11","КБ-101","КБ-102","КБ-103","КБ-104","КБ-105","КБ-106","КБ-107","КБ-108","КБ-109","КБ-110","КБ-21","КБ-22","КБ-23","КБ-24","КБ-25","КБ-26","КБ-27","КБ-28","КБ-29","КБ-31","КБ-32","КБ-33","КБ-34","КБ-35","КБ-36","КБ-37","КБ-38","КБ-41","КБ-42","КБ-43","КБ-45","КБ-46","КБАС-11","МТ-31","МТ-32","МТ-41","МТ-42","МТ-43","МТІТ-11","МТТВ-11","МТЯС-11","ІП-22","ІП-33","ІП-41","ІП-42","ІП-43","ІП-32","ІП-11","ІП-12","ІП-13","ІП-14","ІП-21","ІП-23","ІП-31","КІ-36","КІ-37","КІ-38","КІ-41","КІ-42","КББІ-11","КБСТ-11","КБУІ-11","КНУО-11","МТ-11","МТ-12","МТ-13","МТ-21","КІ-110","КІ-111","КБ-44","МТ-22","КІ-21"]);
ist_cbt.set("ІМФН",["КНІК-11","МІ-12","МІ-21","МІ-31","МІ-41","МІМ-11","ПМ-11","ПМ-12","ПМ-13","ПМ-33","ПМ-41","ПМ-42","ПМ-43","ПМКМ-11","ПММ-11","ПММ-21","ПМПМ-11","ПФ-11","ПФ-21","ПФ-31","ПФ-41","ПФГВ-11","МІ-11","ПМ-14","ПМ-21","ПМ-22","ПМ-23","ПМ-31","ПМ-32"]);
ist_cbt.set("ІНЕМ",["ЕБ-11","ЕБ-12","ЕВ-11","ЕВ-11f","ЕВ-12","ЕВ-21","ЕВ-22","ЕВ-23","ЕВ-31","ЕВ-32","ЕВ-33","ЕВ-34","ЕВ-41","ЕВ-44","ЕВМЕ-11","ЕВМЕ-11f","ЕК-21","МЕ-12","МЕ-13","ЕК-31","ЕК-41","ЕК-42","ЕКЕБ-11","МЕ-14","МЕ-15","МЕ-16","МЕ-17","МЕ-21","МЕ-210","МЕ-21f","МЕ-24","МЕ-25","МЕ-26","МЕ-27","МЕ-28","МЕ-29","МЕ-31","МЕ-34","МЕ-35","МЕ-36","МЕ-37","МЕ-38","МЕ-39","МЕ-41","МЕ-42","МЕ-43","МЕ-44","МЕ-45","МЕ-46","МЕ-47","МЕ-48","МЕ-49","МЕЗД-11","МЕЛГ-11","МЕМ-11","МЕОА-11","МЕОА-11f","МК-11","МК-12","МК-13","МК-14","МК-15","МК-21","МК-22","МК-23","МК-24","МК-31","МК-32","МК-33","МК-34","МК-41","МК-42","МКМ-11","МКМА-11","МКМА-11f","ОП-11","ОП-12","ОП-21","ОП-22","ОП-23","ОП-31","ОП-32","ОП-33","ОП-41","ОП-42","ФБ-11","ФБ-12","ФБ-21","ФБ-22","ФБ-34","ФБ-41","ФБ-42","ФБ-43","МЕ-11","МЕ-11f","ФБ-23","ФБМ-11","ФБМ-21","ЕВ-42","ЕВ-43","МЕ-31f","ФБСС-11","МЕ-33","МЕ-22","МЕ-23","ЕК-22","ФБ-44","МЕМД-11","ФБ-24","МЕ-32","ОП-43","ОПАГ-11","ОПМ-11","ФБ-31","ФБ-32","ФБ-33"]);
ist_cbt.set("ІППО",["ПВ-24","НОПН-11f","ЖР-11","ЖР-12","ЖР-13","ЖР-14","ЖР-23","ЖР-31","ЖР-32","ЖР-33","ЖР-41","ЖР-42","ПВ-33","ПВ-34","ПВ-35","ПВ-36","ПВ-37","ПВ-38","ПВ-39","ПВ-41","ПВ-410","ПВ-411","ПВ-412","ПВ-42","ПВ-43","ПВ-44","ПВ-45","ПВ-46","ПВ-47","ПВ-48","ПВ-49","ПВПР-11","ПВПР-12","ПВПР-13","ПВПР-14","ПВПР-15","ПД-31","ПК-31","ПК-41","ПС-11","ПС-12","ПС-13","ПС-23","ПС-24","ПС-25","ПС-34","ПС-35","ПС-41","ПС-42","ПС-43","ПС-44","ПС-45","ПСПС-11","ПСПС-11f","ПЦ-11","ПЦ-12","ПЦ-21","ПВ-25","ПВ-26","ПВ-16","ПВ-22","ПВ-23","ПВ-311","ПВ-17","ПВ-32","ПВ-21","ЖР-21","ЖР-22","ПС-31","ПС-32","ПД-21","ПВ-11","ПВ-12","ПВ-27","ПВ-28","ПС-33","ЖР-43","ЖРЗВ-11","НОПН-11","ПВ-15","ПВ-29","ПВ-31","ПВ-310","ПС-14","ПС-21","ПС-22","ПВ-13","ПВ-14"]);
ist_cbt.set("ІСТР",["ЕО-11","ЕО-12","ЕО-21","ЕО-31","ЕО-41","ЕО-42","ЕОЕК-11","ПТ-11","ПТ-21","ПТ-31","ПТ-41","ПТПБ-11","ТЗ-11","ТЗ-21","ТЗ-41","ТУ-11","ТУ-12","ТУ-21","ТУ-22","ТУ31","ТУ-32","ТУ-33","ТУ-41","ТУ-42","ТУТД-11","ЦБ-11","ЦБПБ-11"]);
ist_cbt.set("ІТРЕ",["ІК-11","ІК-12","ІК-21","ІК-22","ІК-31","ІК-41","ІТПА-11","АН-11","АН-2","АН-31","АН-41","БІ-11","БІ-21","БІ-31","БІ-41","БІІР-11","ЕЛ-11","ЕЛ-21","ЕЛ-31","ЕЛ-41","ЕЛЕА-11","МН-11","МН-12","МН-21МН-31","МН-41","МНМ-11","ТР-11","ТР-12","ТР-13","ТР-14","ТР-15","ТР-21","ТР-22","ТР-23","ТР-24","ТР-31","ТР-32","ТР-33","ТР-34","ТР-41","ТР-42","ТР-43","ТР-44","ТР-45","ТРМ-21","ТРМ-22","ТРМ-23","ТРПА-11","ТРРП-11","ТРСА-11","ТРТЕ-11"]);
ist_cbt.set("ІХХТ",["БТ-12","БТ-21","БТ-22","БТ-31","БТ-32","БТ-41","БТБТ-11","ФР-11","ФР-21","ФР-22","ФР-31","ФР-41","ФР-42","ФРМ-21","ФРФП-11","ХР-11","ХР-12","ХР-22","ХР-31","ХР-32","ХР-41","ХРБВ-11","ХТ-11","ХТ-12","ХТ-13","ХТ-14","ХТ-21","ХТ-22","ХТ-24","ХТ-31","ХТ-32","ХТ-33","ХТ-34","ХТ-35","ХТ-36","ХТ-37","ХТ-38","ХТ-41","ХТ-42","ХТ-43","ХТ-44","ХТ-45","ХТ-46","ХТ-47","ХТКХ-11","ХТМ-11","ХТНР-11","ХТОР-11","ХТПВ-11","ХТПК-11","БТ-11","ХР-21"]);

insts.forEach(inst => {
    inst.addEventListener('click', function(e) {
        var allgrps = ist_cbt.get(inst.innerText);
        var groupForIst = document.querySelector('#groupForIst');
        groupForIst.innerHTML = '<h6 class="dropdown-header">Оберіть групу</h6>';
        for(var i = 0; i < allgrps.length; i++)
        {
            groupForIst.innerHTML += '<a onclick="groupText(this)" class="dropdown-item" href="#">' + allgrps[i] + '</a>'
        }
    });
  });