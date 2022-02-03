    require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {
var url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";
      
   esriConfig.request.corsEnabledServers.push('https://rawgit.com');
      
             const template = {
          title: "STL Crime",
          content: "Crime, District, Neighborhood, ILEADSStreet"
        };

        const csvLayer = new CSVLayer({
          url: url,
          copyright: "gregbrunner_slugis",
          popupTemplate: template
        });

        var symbol = {
          type: "simple-marker", 
          color: "green"
        };

      csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: symbol
      };

      var map = new Map({
        basemap: "gray",
        layers: [csvLayer]
      });

      var view = new MapView({
        container: "viewDiv",
        center: [-90.19789, 38.62727],
        zoom: 12,
        map: map
      });

    });
