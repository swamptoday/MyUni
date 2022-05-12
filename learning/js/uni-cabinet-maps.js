var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var corpusNumbers = ["Головний корпус","1","2","3","4","5","6","7","8","9","10","11","14","15","21","28"];
var innercorpusHTML = "<h6 class='dropdown-header'>Оберіть корпус</h6>";
var newCorpus = "<a id=istituteItem onclick='corpusText(this)' class='dropdown-item' href='#'>"+ corpusNumbers[0] +"</a>";
for(var i=1; i<corpusNumbers.length; i++)
{
  newCorpus = newCorpus + "<a id=istituteItem onclick='corpusText(this)' class='dropdown-item' href='#'>"+ corpusNumbers[i] +"</a>";
}
innercorpusHTML = innercorpusHTML + newCorpus;
document.getElementById("corpusDropDownitems").innerHTML = innercorpusHTML;


function corpusText(element)
{
    document.getElementById("corpusButton").innerText = element.innerText;
}

function changename(element)
{
    console.log(element.title);
}