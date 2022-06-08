const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const runningTotal = 0;
  const totalDistance = this.journeys.reduce((runningTotal, journey) => runningTotal += journey.distance, runningTotal);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // Got the function from stack, but not sure how it works to retrieve the unoque values.
  // https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
  const unique = [...new Set(this.journeys.map(journey => journey.transport))];
  return unique;
};


module.exports = Traveller;
