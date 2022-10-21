/*
  '*'		All
	'abc' Element Selector <body>, <p>, <img> etc
	'#' 	ID selector (used for javascript - unofficial internet rule)
	'.' 	CLASS selector (used for css rules - unofficial internet rule)

  '~'     PRECEDED by
  '+'     Immediately after
  '>'     PARENT
  ' '     ALL inside
*/

let XMLRequest= new XMLHttpRequest();
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "DEMO_KEY"; //get officaial key**

XMLRequest.open("GET", url + api_key, true);
XMLRequest.send();

XMLRequest.addEventListener("load", () => {
	if(!(XMLRequest.status == 200) && !(XMLRequest.readyState == 4)){ return };
  let response = JSON.parse(XMLRequest.responseText);
  console.log(response)
  let image = document.getElementById("picture");

  document.getElementById("title").textContent = response.title;
  document.getElementById("date").textContent = response.date;
  image.src = response.url;
  image.alt = response.title;
  image.parentElement.href = response.hdurl;
  document.getElementById("explanation").textContent = response.explanation;
})

