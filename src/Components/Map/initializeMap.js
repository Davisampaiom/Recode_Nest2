export function initializeMap(mapboxgl, map) {
    map.on("click", "data", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["data"],
      });
      var clusterId = features[0].properties.cluster_id;
      map
        .getSource("dcmusic.live")
        .getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) return;
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });
  
  
    map.on("mouseenter", "data", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "data", function () {
      map.getCanvas().style.cursor = "";
    });
  }