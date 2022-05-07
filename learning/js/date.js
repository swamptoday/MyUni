var date = new Date(); 
var dd = date.getDate(); 
if(dd<10)
{
  dd = "0"+dd;
}
var mm = date.getMonth() + 1; 
if(mm<10)
{
mm = "0"+mm;
}
var yyyy = date.getFullYear(); 
var newDate = dd + " / " + mm + " / " + yyyy; 
var p = document.getElementById("dateButton"); 
p.innerHTML = newDate; 