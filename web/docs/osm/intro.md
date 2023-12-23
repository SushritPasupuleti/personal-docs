# OpenStreetMaps

Utilizing OpenStreetMaps data for various purposes.

## Data Download

Download data [from](http://www.geofabrik.de/data/) and extract the file.

Includes:

- Raw osm data
- Shapefiles
- Geocoding
- etc

## Importing Data

Create a database `DB_NAME` and import the data. Make sure you have `postgis` extension installed.

```
CREATE EXTENSION postgis;
```

### Osm2pgsql

```bash
osm2pgsql -c -d DB_NAME -U postgres -H localhost -W <path-to-osm-file>
```

- `-W` will prompt for password.

## Working with data - OverpassAPI

### OverpassQL

References:

- [OSM Overpass API: SQL for Geography](https://medium.com/engineered-publicis-sapient/osm-overpass-api-sql-for-geography-b7ec3546088d)

### OverpassAPI Docker Image

Refer to [OverpassAPI Docker Image](https://github.com/wiktorn/Overpass-API).

