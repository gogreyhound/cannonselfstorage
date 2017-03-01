function initialize()
                    {
                        var latlng = new google.maps.LatLng(35.092670,-85.177199);
                        var latlng2 = new google.maps.LatLng(35.044162,-85.308351);
                        var myOptions =
                        {
                            zoom: 14,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };

                        var myOptions2 =
                        {
                            zoom: 16,
                            center: latlng2,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };

                        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

                        var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);

                        var myMarker = new google.maps.Marker(
                        {
                            position: latlng,
                            map: map,
                            title:"Hwy 58"
                       });

                        var myMarker2 = new google.maps.Marker(
                        {
                            position: latlng2,
                            map: map2,
                            title:"Columbia St"
                        });
                    }