function groupText(element)
{
    document.getElementById("groupButton").innerText = element.innerText;
}

function instituteText(element)
{
    document.getElementById("instituteButton").innerText = element.innerText;
}

const logFileText = async file => {
    const response = await fetch(file);
    const text = await response.text();
    console.log(text);
    alert(text[1]);
}

logFileText('АВ-11.txt');
//readTextFile("file:///C:/MyData/DesktopУнивер/MyUni Project/MyUni/MyUni/schedule-txts");АВ-11.txt