function groupText(element)
{
    document.getElementById("groupButton").innerText = element.innerText;
}

function instituteText(element)
{
    document.getElementById("instituteButton").innerText = element.innerText;
}

function getschedule()
{
    groupName = document.getElementById("groupButton").innerText;
    instituteName = document.getElementById("instituteButton").innerText;
    urlText = "https://student.lpnu.ua/students_schedule?departmentparent_abbrname_selective=" + instituteName + "&studygroup_abbrname_selective=" + groupName + "&semestrduration=1";
}