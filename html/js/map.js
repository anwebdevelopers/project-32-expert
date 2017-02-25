//--------------------------------------------------------------------
//Яндекс карта
//--------------------------------------------------------------------

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [51.88172256597008,34.34456952288602],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
    }, {
        searchControlProvider: 'yandex#search'
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '',
        balloonContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon-map.png',
        // Размеры метки.
        iconImageSize: [27, 29],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-13.5, -29]
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w < 768) {
            myMap.behaviors.disable('drag');
        } else {
            myMap.behaviors.enable('drag');
        }
    });

    myMap.geoObjects.add(myPlacemark);
});
