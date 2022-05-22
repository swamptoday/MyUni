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
    alert(text[10]+text[11]+text[12]);
    
}


logFileText('АВ-11.txt');
//readTextFile("file:///C:/MyData/DesktopУнивер/MyUni Project/MyUni/MyUni/schedule-txts");АВ-11.txt

function getClassNum(text)
{

}