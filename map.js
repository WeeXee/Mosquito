function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.505, lng: -0.09 }, // Initial coordinates
        zoom: 13, // Initial zoom level
        styles: [
            // You can customize the map's style here
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ffffff' }]
            }
        ]
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: { lat: 51.5, lng: -0.09 },
        map: map,
        title: 'A Marker Here'
    });
}