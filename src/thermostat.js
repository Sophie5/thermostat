'use strict';
const MINTEMPERATURE = 10
const MAXTEMPERATURE = 32
const TEMPERATURE = 20
function Thermostat (){
  this.temperature = TEMPERATURE
  this.minTemperature = MINTEMPERATURE
  this.maxTemperature = MAXTEMPERATURE
  this.powerSaving = true
};

Thermostat.prototype.checkCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increase = function () {
  if (this.temperature < MAXTEMPERATURE) {
  this.temperature += 1;
}
else {
throw new Error('Maximum temperature is 32!');
}
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > MINTEMPERATURE) {
    this.temperature -= 1;
  }
  else {
  throw new Error('Minimum temperature is 10!')
}

Thermostat.prototype.reset = function() {
  this.temperature = TEMPERATURE
}
};
