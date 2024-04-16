import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import xml2json from 'xml2json';


async function fetchData() {
  try {
    const response = await fetch('https://avoinapi.vaylapilvi.fi/vaylatiedot/ows?service=wfs&request=GetFeature&typeName=ratatiedot:rail_right');
    const xmlString = await response.text();
    const jsonObject = JSON.parse(xml2json.toJson(xmlString));

    // Extract all features directly
    const features = jsonObject['wfs:FeatureCollection']['wfs:member'];

    // Save the GeoJSON data as a file
    writeFileSync('output.geojson', JSON.stringify(features, null, 2));

  } catch (error) {
    console.error(error);
  }
}

fetchData();
