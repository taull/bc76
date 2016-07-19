function initMap() {

  // Specify features and elements to define styles.
  var styleArray = [
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f49935"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#fad959"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#a1cdfc"
            },
            {
                "saturation": 30
            },
            {
                "lightness": 49
            }
        ]
    }
  ];


  var myLatlng = new google.maps.LatLng(34.000207,-81.041840);
  var mapOptions = {
    zoom: 16,
    center: myLatlng, 
    styles: styleArray,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}



$(document).ready(function(){

  // Waypoints Opacity

  $('#banner-section').css('opacity', 0);
  $('#banner-h2').css('opacity', 0);
  $('#arrow-container').css('opacity', 0);

  $(window).load(function() {
    setTimeout(function(){
      $('#banner-section').addClass('fadeInUp');
    },1000);

    setTimeout(function(){
      $('#banner-h2').addClass('fadeInUp');
      $('#arrow-container').addClass('fadeIn');
    },2000);

    setTimeout(function(){
      $('#arrow').addClass('bounce');
    },3000);

  });

// Follow Waypoints
  var waypoint = new Waypoint({
    element: document.getElementById('where'),
    handler: function(direction) {
      $('#arrow-container').addClass('fadeOut');
    },
    offset: 'bottom-in-view' 
  })

  // var waypoint = new Waypoint({
  //   element: document.getElementById('paypal-module'),
  //   handler: function(direction) {
  //     $('#paypal-h1').addClass('pulse');
  //   },
  //   offset: 'bottom-in-view' 
  // })




});

