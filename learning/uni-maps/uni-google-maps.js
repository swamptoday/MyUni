//array of images and links to google maps elements
var mapInfo =
[
  {
    "imageSource": '../uni-maps/corpus-image/maincorpus.jpg',
    "mapSource": 'https://goo.gl/maps/nYFKsPdMb4LJ5yAH8'
  },
  {
    "imageSource": '../uni-maps/corpus-image/1corpus.jpg',
    "mapSource": 'https://goo.gl/maps/BBVcRS5LC3tbFe1T9'
  },
  {
    "imageSource": '../uni-maps/corpus-image/2corpus.jpg',
    "mapSource": 'https://goo.gl/maps/WTbegk4eEyPtkLi66'
  },
  {
    "imageSource": '../uni-maps/corpus-image/3corpus.jpg',
    "mapSource": 'https://goo.gl/maps/XWeiaFbcbfdNkU7r8'
  },
  {
    "imageSource": '../uni-maps/corpus-image/4corpus.jpg',
    "mapSource": 'https://goo.gl/maps/QvUwb5fKCxFVEd9N9'
  },
  {
    "imageSource": '../uni-maps/corpus-image/5corpus.jpg',
    "mapSource": 'https://goo.gl/maps/5nG2714RtTqBYWGc7'
  },
  {
    "imageSource": '../uni-maps/corpus-image/6corpus.jpg',
    "mapSource": 'https://goo.gl/maps/gN9Ku9GSQd8ouTKd7'
  },
  {
    "imageSource": '../uni-maps/corpus-image/7corpus.jpg',
    "mapSource": 'https://goo.gl/maps/betryMRCNZ5Uewtd9'
  },
  {
    "imageSource": '../uni-maps/corpus-image/8corpus.jpg',
    "mapSource": 'https://goo.gl/maps/6N6FVkX6z2XmE7Pv7'
  },
  {
   "imageSource": '../uni-maps/corpus-image/9corpus.jpg',
   "mapSource": 'https://goo.gl/maps/oB1he5KH2zHf2rE16'
  },
  {
    "imageSource": '../uni-maps/corpus-image/10corpus.jpg',
    "mapSource": 'https://goo.gl/maps/9f9BbnEWvR2rZKW18'
  },
  {
    "imageSource": '../uni-maps/corpus-image/11corpus.jpg',
    "mapSource": 'https://goo.gl/maps/g64EQqxU5knL8sUn6'
  },
  {
    "imageSource": '../uni-maps/corpus-image/14corpus.jpg',
    "mapSource": 'https://goo.gl/maps/zQhHAG4KyYsgRr5e9'
  },
  {
    "imageSource": '../uni-maps/corpus-image/15corpus.jpg',
    "mapSource": 'https://goo.gl/maps/LfRqiyTrHfQQkq4z7'
  },
  {
    "imageSource": '../uni-maps/corpus-image/21corpus.jpg',
    "mapSource": 'https://goo.gl/maps/NCR24TqSfxERTUZa7'
  },
  {
    "imageSource": '../uni-maps/corpus-image/28corpus.jpg',
    "mapSource": 'https://goo.gl/maps/rK1bigBhYJU7JmRy7'
  }
]


//array of marker features
var markers = 
[
  {
      "title": 'Головний корпус Національного університету "Львівська політехніка"',
      "lat": '49.83585469615605',
      "lng": '24.014415340250576',
      "number": 'ГК',
      "description": '<div id="content">'+
      '<div id="imageContent">'+ '<div style = "text-align:center"><img src = ' + mapInfo[0].imageSource + ' width="240" height="160"/></div>' + 
      '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">Головний корпус Національного університету "Львівська політехніка"</h1></p></div>'+
      '<p><a href ='+ mapInfo[0].mapSource + '>See in Google maps</a>'+
      '.</p></div>'+
      '</div>'+
      '</div>'
  },
  {
      "title": '1-й корпус Національного університету "Львівська політехніка"',
      "lat": '49.835387861526854',
      "lng": '24.010635305900685',
      "number": '1',
      "description": '<div id="content">'+
      '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[1].imageSource + ' width="240" height="160"/></div>' + 
      '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">1-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
      '<p><a href='+ mapInfo[1].mapSource + '>See in Google maps</a>'+
      '.</p></div>'+
      '</div>'+
      '</div>'
  },
  {
    "title": '2-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83613898735954',
    "lng": '24.012428741131423',
    "number": '2',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[2].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">2-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[2].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '3-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.836567126070385',
    "lng": '24.013622161203866',
    "number": '3',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[3].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">3-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[3].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '4-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83657278073914',
    "lng": '24.011343628324834',
    "number": '4',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[4].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">4-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[4].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '5-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.835131839878855',
    "lng": '24.008085128699637', 
    "number": '5',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[5].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">5-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[5].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '6-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83529147872354',
    "lng": '24.006721615110774',
    "number": '6', 
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[6].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">6-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[6].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '7-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83452409398298',
    "lng": '24.009811831583637', 
    "number": '7',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[7].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">7-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[7].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '8-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.837684091599705',
    "lng": '24.012413396073736',  
    "number": '8',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[8].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">8-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[8].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '9-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83657259394328', 
    "lng": '24.014300811415307',  
    "number": '9',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[9].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">9-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[9].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '10-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.836550634610504',  
    "lng": '24.0152360132631',  
    "number": '10',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[10].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">10-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[10].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '11-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83595325761718',   
    "lng": '24.016035084427585',  
    "number": '11',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[11].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">11-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[11].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '14-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.835634942730906',   
    "lng": '24.0165607973619',  
    "number": '14',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[12].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">14-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[12].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '15-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.838701840673714',   
    "lng": '24.018498760895927',  
    "number": '15',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[13].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">15-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[13].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '21-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.823861617011886',   
    "lng": '24.02964593969062',  
    "number": '21',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[14].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">21-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[14].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  },
  {
    "title": '28-й корпус Національного університету "Львівська політехніка"',
    "lat": '49.83729444118061',   
    "lng": '24.012411377289542',  
    "number": '28',
    "description": '<div id="content">'+
    '<div id="imageContent">'+ '<div style = "text-align:center"><img src=' + mapInfo[15].imageSource + ' width="240" height="160"/></div>' + 
    '<div id = "bodyContent"><div style = "text-align:center"><p><h1 id="firstHeading" class="firstHeading">28-й корпус Національного університету "Львівська політехніка"</h1></p></div>'+
    '<p><a href='+ mapInfo[15].mapSource + '>See in Google maps</a>'+
    '.</p></div>'+
    '</div>'+
    '</div>'
  }
];


window.onload = function () 
{
  LoadMap();
}

function LoadMap() 
{
  //features of map
  var mapOptions = 
  {
    center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
    zoom: 14,
    mapId: '46eac6ee1c017a6d'
  };

  //initializing map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //initializing InfoWindow.
  var infoWindow = new google.maps.InfoWindow();

  //initializing markers
  for (var i = 0; i < markers.length; i++) 
  {
    var data = markers[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker(
      {
        position: myLatlng,
        label: data.number,
        map: map,
        title: data.title
      });

    (function (marker, data) 
    {
      google.maps.event.addListener(marker, "click", function (e) 
      {
        //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
        infoWindow.setContent("<div>" + data.description + "</div>");
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}