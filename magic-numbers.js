// Magic Numbers

// BEFORE
function orbitalPeriod(arr) {
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
    const c = Math.pow(6367.447 + obj.avgAlt, 3);
    const b = Math.sqrt(c / 398600.4418);
    const orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;

    return obj;
  };

  for (elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// AFTER
function orbitalPeriod(arr) {
  const earthRadius = 6367.447;
  const gravityMetric = 398600.4418;
  const twoPI = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
    const gravityCircReference = Math.pow(earthRadius + obj.avgAlt, 3);
    const totalGravametric = Math.sqrt(gravityCircReference / gravityMetric);
    const orbPeriod = Math.round(twoPI * totalGravametric);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;

    return obj;
  };

  for (elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// Clean Code Variables: Challenge 2 - Magic Numbers
const time = 86400000;

// 86400000
const millisecondsInADay = 60 * 60 * 24 * 1000; //60 seconds * 60 minutes * 24 hours * 1000 milliseconds
