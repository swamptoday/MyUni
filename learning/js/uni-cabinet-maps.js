var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var corpusNumbers = ("Головний корпус","1","2","3","4","5","6","7","8","9","10","11","14","15","21","28");

var innercorpusHTML = "<h6 class='dropdown-header'>Оберіть корпус</h6>";
var newCorpus;

for(var i=0;i<corpusNumbers.length;i++)
{
  var newCorpus = newCorpus + "<a onclick='instituteText(this)' class='dropdown-item' href='#'>"+ corpusNumbers[i] +"</a>";
}
console.log(newCorpus);