function initialize() {
    
    "use strict";
    
    var latlng = new google.maps.LatLng(35.092670, -85.177199),
    
        latlng2 = new google.maps.LatLng(35.044162, -85.308351),
   
        myOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
    
        myOptions2 = {
            zoom: 16,
            center: latlng2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },

        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions),
    
        map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2),
    
        myMarker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Highway 58"
        }),

        myMarker2 = new google.maps.Marker({
            position: latlng2,
            map: map2,
            title: "Columbia St"
        });
}
