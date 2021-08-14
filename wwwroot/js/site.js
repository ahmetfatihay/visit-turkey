// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const button = document.querySelector('.btn')
const form = document.querySelector('.form')

button.addEventListener('click', function () {
    form.classList.add('form--no')
});

let glass;

function center(mylat) {
    var choosen = document.getElementById('choosen');
    var mylng = choosen.value;
    console.log(mylat);
    console.log(mylng);
  //  glass = new google.maps.Map(document.getElementById("glass"), {
    //    center: { lat: mylat, lng: mylng },
     //   zoom: 5.80,
    //});
    console.log(JSON.parse(mylat));
    mylat = JSON.parse(mylat);
    glass = new google.maps.Map(document.getElementById("glass"), {
        center: { lat: Number(mylat.lat.replace(',', '.')), lng: Number(mylat.lng.replace(',', '.')) },
        zoom: 9,
    });
    
    
}


function initMap() {
    glass = new google.maps.Map(document.getElementById("glass"), {
        center: { lat: 38.963745, lng: 35.243322 },
        zoom: 5.8,
    });
}





