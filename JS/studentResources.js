// Link to adding marker documentation: https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker

mapboxgl.accessToken = 'pk.eyJ1IjoiZWR3aW5sbGlndWljb3RhIiwiYSI6ImNsZm84Mm83NjA5eHkzcG4za3E4OHY4NnMifQ.TlDkdqOPWDJgo0yfMqS8PA';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-74.002689, 40.744875], // starting position [lng, lat]
  zoom: 12 // starting zoom
});

var markers = [];

function processMarkers(){

	var html = "";
	
	for( index in internships){
		console.log(internships[index].lngLat);
		var curr = internships[index];
		
		let marker = new mapboxgl.Marker()
	  .setLngLat(curr.lngLat.split(", "))
	  .addTo(map);

		markers.push(marker);	

		html += `<div class="card" style="width: 18rem;">
						  <div class="card-body">
						    <h5 class="card-title">${curr.name}</h5>
						    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
						    <p class="card-text">${curr.description}</p>
						    <a href="#" class="card-link">Link: ${curr.link}</a>
						  </div>
						</div>`;
	}

	document.querySelector(".internships").innerHTML = html;
	
}

document.querySelector(".map").onclick = function(){

	let everything = document.querySelector(".everythingElse");
	let map = document.getElementById("map");
  
	console.log(everything)
  console.log(map)
	
  everything.style.display = "none";
  map.style.display = "block";
  document.querySelector("#map").style.height = "300px";
	
	window.setTimeout(()=>{
		processMarkers();
		map.resize();
	}, 500);
	
};


let internships = [
  {
    "name": " Data Science/ML Intern",
    "lngLat": "-74.002689, 40.744875",
    "description": "One of our awesome industry partner companies, Elemental Cognition, is looking for a full-time (40 hours/week) 10-week intern. Position is open to undergraduate and high-school students. Pay is $20-25 per hour, commensurate with experience.",
    "languages": "Python",
    "category": true,
    "link": "https://g.co/kgs/jLN4GB"
  }, 
    {
    "name": "Web Dev Intern",
    "lngLat": "-73.983033, 40.747379",
    "description": "We're looking for a committed high schooler to help us with our website. Pay is $18 / hour.",
    "languages": "Javascript, CSS, HTML",
    "category": "Hybrid Programs",
    "link": "https://g.co/kgs/jLN4GB"
  }, 
  {
    "name": "Web Development Bootcamp",
    "lngLat": "-73.992260, 40.741299",
    "description": "Apply today for ",
    "languages": "Javascript, CSS, HTML",
    "category": "Online Only Programs",
    "link": "https://g.co/kgs/jLN4GB"
  }
]

