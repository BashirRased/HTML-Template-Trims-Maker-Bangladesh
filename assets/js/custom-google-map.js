// Initialize and add the map
function initMap() {
    
    // The location of Uluru
    var uluru = {lat: 23.734264, lng: 90.414030};
    
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('tmb-google-map'), {zoom: 15, center: uluru});
    
        // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}