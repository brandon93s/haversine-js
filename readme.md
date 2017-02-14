# haversine-js [![Build Status](https://travis-ci.org/brandon93s/haversine-js.svg?branch=master)](https://travis-ci.org/brandon93s/haversine-js)

> Implementation of the [haversine formula](https://en.wikipedia.org/wiki/Haversine_formula "Haversine Formula") to calculate the [great-circle distance](https://en.wikipedia.org/wiki/Great-circle_distance "great-circle distance") between two points on a sphere given their longitudes and latitudes  :earth_americas:


## Install

```
$ npm install --save haversine-js

```


## Usage

```js
const haversine = require('haversine-js');

const atlanta = {
  latitude: 33.7490,
  longitude: -84.3880
};

const london = {
  latitude: 51.5074,
  longitude: -0.1278
};

const options = {
    radius: haversine.EARTH.MILE
};

haversine(atlanta, london, options).toFixed(0);
//=> 4207
```


## API

### haversine(start, end, [,options])

#### start, end

Type: `object`

Object containing the longitude/latitude coordinate pair for either point.

```js
const start = {
    longitude: 33.7490,
    latitude: 84.3880
};
```


#### options

##### radius

Type: `number`<br>
Default: `haversine.EARTH.MILE`

The radius of the sphere.

#### isRadians

Type: `boolean` <br>
Default: `false`

Set to true if the longitude/latitude values are in radians.


## Constants

### Radii

| Constant        | Value          
| -------------   |:-------------:|
| EARTH.MILE      | 3959 |
| EARTH.KM        | 6371      |
| EARTH.M         | 6371000     |
| EARTH.NMI       | 3440     |


## License

MIT © [Brandon Smith](https://github.com/brandon93s)
