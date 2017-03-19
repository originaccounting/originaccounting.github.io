$(function() {
	
	// GOOGLE MAP
	$(".contact-page-map").height(400);
	$(".footer-map").height(370);
	function initialize($) {
		var pos = {lat: -37.8135191, lng: 144.9582541}
		var mapOptions = {
			zoom: 15,
			center: new google.maps.LatLng(-37.8135191, 144.9582541)
		};
		var map = new google.maps.Map(document.querySelector('.map, .contact-page-map, .footer-map'), mapOptions);
		var marker = new google.maps.Marker({
			position: pos,
			map: map
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
});