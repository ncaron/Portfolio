/* Makes a Google Map and places a marker at my hometown */
function initMap() {
    var myLatLng = {lat: 47.048100, lng: -67.739911};
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng
    });
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "My hometown!"
    });
}