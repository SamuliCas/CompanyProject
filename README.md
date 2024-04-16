# GeoJSON Converter

This is a simple Node.js script that fetches data from a Väylävirasto URL, converts it from XML to JSON, and saves it as a GeoJSON file.

## Installation

1. Make sure you have Node.js installed on your system. You can download it from https://nodejs.org/.

2. Clone this repository or download the `geojson.js` file.

3. Install the required dependencies by running the following command in your terminal: "npm install node-fetch xml2json"

## Usage

1. Open a terminal and navigate to the directory containing the `geojson.js` file.

2. Run the script using the following command: "node geojson.js"

3. The script will fetch data from the specified URL, convert it to GeoJSON format, and save it as `output.geojson` in the same directory.

## Configuration

You can modify the script to fetch data from a different URL by changing the URL specified in the `fetch` function call in the `fetchData` function.

## Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch): A lightweight module that brings window.fetch to Node.js.
- [xml2json](https://www.npmjs.com/package/xml2json): A simple XML to JSON converter.


# GeoJSON Muunnin

Tämä on yksinkertainen Node.js-skripti, joka hakee dataa Väyläviraston URL-osoitteesta, muuntaa sen XML:stä JSON-muotoon ja tallentaa sen GeoJSON-tiedostona.

## Asennus

1. Varmista, että sinulla on Node.js asennettuna järjestelmässäsi. Voit ladata sen osoitteesta https://nodejs.org/.

2. Kloonaa tämä repository tai lataa `geojson.js`-tiedosto.

3. Asenna tarvittavat riippuvuudet suorittamalla seuraava komento terminaalissa: "npm install node-fetch xml2json"

## Käyttö

1. Avaa terminaali ja siirry hakemistoon, jossa `geojson.js`-tiedosto sijaitsee.

2. Suorita skripti seuraavalla komennolla: "node geojson.js"

3. Skripti hakee tiedot määritetystä URL-osoitteesta, muuntaa ne GeoJSON-muotoon ja tallentaa ne `output.geojson`-tiedostona samassa hakemistossa.

## Kokoonpano

Voit muokata skriptiä hakemaan tietoja eri rajapinnoista muuttamalla URL-osoitetta, joka on määritetty `fetch`-funktiokutsussa `fetchData`-funktion sisällä.

## Riippuvuudet

- [node-fetch](https://www.npmjs.com/package/node-fetch): Kevyt moduuli, joka tuo window.fetchin Node.js-ympäristöön.
- [xml2json](https://www.npmjs.com/package/xml2json): Yksinkertainen XML:n ja JSON:n muunnin.
