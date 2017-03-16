'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();
  });

describe("temperature", function() {
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
     thermostat.powerSavingOff()
     expect(thermostat.maxTemperature).toEqual(32);
   });

   it ('sets the temperature back to 20', function(){
     thermostat.reset
     expect(thermostat.temperature).toEqual(20);
   });

   it(' checks that power saving mode is on', function(){
     expect(thermostat.powerSaving).toEqual(true);
   });
 });

  describe('Increase', function(){

    it('increases the temperature by 1', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('wont allow to increase past max temperature', function(){
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
    it('wont allow to decrease past min temperature', function(){
        thermostat.temperature = 10
      expect(function(){
        thermostat.decrease()
      }).toThrowError("Minimum temperature is 10!")
    });
  });

  describe('powerSaving', function() {

   it('sets the max temperature to 25', function(){
     expect(thermostat.maxTemperature).toEqual(25);
   });
   it('turns powerSaving back on', function() {
     thermostat.powerSaving = false
     thermostat.powerSavingOn()
     expect(thermostat.powerSaving).toBe(true)
   })
  });

  describe('energy usage', function() {

    it('returns low-usage <18 degrees', function() {
      thermostat.temperature = 17;
      expect(thermostat.checkUsage()).toEqual("low-usage")
    })
    it('returns medium-usage <25 but at least 18 degrees', function() {
      expect(thermostat.checkUsage()).toEqual("medium-usage")
    })
    it('returns high-usage for temps >= 25 degrees', function() {
      thermostat.temperature = 26
      expect(thermostat.checkUsage()).toEqual("high-usage")
    })
  })
});
