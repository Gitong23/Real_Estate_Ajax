
 let map;

 async function initMap(xlat, xlon) {

    const position = { lat: xlat, lng: xlon };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 9,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
    });

}
