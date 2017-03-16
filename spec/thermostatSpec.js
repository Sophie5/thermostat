'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('return the current temperature', function() {
    expect(thermostat.checkCurrentTemperature()).toEqual(20);
  });

  it('sets minimum temperature', function(){
    expect(thermostat.minTemperature).toEqual(10);
  });

   it('sets maximum temperature', function(){
     expect(thermostat.maxTemperature).toEqual(32);
   });

   it ('sets the temperature back to 20', function(){
     thermostat.reset
     expect(thermostat.temperature).toEqual(20);
   });

  describe('Increase', function(){

    it('increases the temperature by 1', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('wont\'t allow to increase past max temperature', function(){
      thermostat.temperature = 32;
      expect(function(){
        thermostat.increase()
      }).toThrowError("Maximum temperature is 32!")
    });
  });

  describe('Decrease', function(){

    it('decreases temperature by 1', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
    it('wont\'t allow to decrease past min temperature', function(){
        thermostat.temperature = 10
      expect(function(){
        thermostat.decrease()
      }).toThrowError("Minimum temperature is 10!")
    });
  });
});
