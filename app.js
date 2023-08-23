function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 23.921520888664563,
			lng: 88.65151923769885,
		},
		zoom: 10,
		mapId: '37e49adcc65fe966',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
    zoomControl:false,
    MapOptions:false
	});

	//23.921520888664563, 88.65151923769885
	const markers = [
		[
			"Suvo's House",
			23.921520888664563,
			88.65151923769885,
			'/img/home.png',
			100,
			100,
		],
    [

      //2.921829678390054, 60.65201724662727
			"Car Servicing Center",
			23.946653835346932,
      88.04857246341626,
			'/img/car.png',
			120,
			100,
		],

    [

      //2.921829678390054, 60.65201724662727
			"Bike Repairing Shop",
			23.94161197634605, 
      88.29814180485033 , 
			'/img/bike.png',
		  120,
			80,
		],
    
    [

      //2.921829678390054, 60.65201724662727
			"Gateway Of Plassey Battle Field",
			23.78, 
      88.23, 
			'/img/gun.png',
		  100,
			150,
		],
    
	
	
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}









const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let sLeft;
slider.scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});


slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 
