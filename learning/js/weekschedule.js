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
var parttext = '';

const logFileText = async file => {
    const response = await fetch(file);
    const text = await response.text();
    console.log(text);
    for(i; i<text.length;i++)
    {
        if((text[i]+text[i+1]+text[i+2]+text[i+3]+text[i+4]+text[i+5]) == 'header')
        {
            alert(text[i+8]+text[i+9]);
            break;
        }
    }
    
}


logFileText('АВ-11.txt');
//readTextFile("file:///C:/MyData/DesktopУнивер/MyUni Project/MyUni/MyUni/schedule-txts");АВ-11.txt

function getClassNum(text)
{

}