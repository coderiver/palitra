//var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	if($('#contactmap').length){
		myMap1 = new ymaps.Map('contactmap', {
			center: [55.76, 37.64], // Москва
			zoom: 10
		});
	}
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    
	if($('#formap1').length){
	    new ymaps.Map('formap1', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('formap2', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('formap3', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	}
	if($('#cmap1').length){
	    new ymaps.Map('cmap1', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('cmap2', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('cmap3', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	}

	if($('#map1').length){
	    new ymaps.Map('map1', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('map2', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	    new ymaps.Map('map3', {
	        center: [55.76, 37.64], // Москва
	        zoom: 10
	    });
	}

    



    

}