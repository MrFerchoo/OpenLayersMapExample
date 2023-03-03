import "/style.css";
import { Map, Tile, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj.js";
import { Group, Layer } from "ol/layer";
import { XYZ } from "ol/source";
const map = new Map({
  target: "map",
  layers: [
    //   new TileLayer({
    //     source: new OSM()
    //   })
    new TileLayer({
      source: new XYZ({
          url:"https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
      })
    })
  ],
  view: new View({
    center: fromLonLat([-101.7165358, 21.1501622]),
    zoom: 14,
  }),
});

// Google Maps: https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}
// Google Satellite: http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}
// Google Hybrid: https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
// Google Terrain: https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}
// Google Traffic: https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}
// Google Roads: https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}
