ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76,37.625],
            zoom: 15,
            controls: ['geolocationControl', 'zoomControl']
            },
            { 
              suppressMapOpenBlock: true,
              geolocationControlSize: "large",
              geolocationControlPosition:  { top: "200px", right: "20px" },
              geolocationControlFloat: 'none',
              zoomControlSize: "small",
              zoomControlFloat: "none",
              zoomControlPosition: { top: "120px", right: "20px" }
            }
          );

        var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/contacts/Map_marker.svg',
          iconimagesize: [20, 20],
          iconImageDifset: [20, 20]
        });

        myMap.geoObjects.add(myPlacemark); 
        setTimeout(() => {
          myMap.container.fitToViewport();
        }, 5000);
    }