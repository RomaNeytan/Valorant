@@include('jquery-3.5.1.min.js', {})
@@include('slick.min.js', {})

//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Ibg

function ibg() {

    document.querySelectorAll(".ibg").forEach(el => {
        if (el.querySelector('img')) {
            el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
        }
    });
}

ibg();

// Maps

function initMap() {
    var uluru = { lat: 49.9942021, lng: 36.2274025 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}













