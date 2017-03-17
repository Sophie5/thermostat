
$(document).ready(function(){
  var thermo = new Thermostat();

  $('#temperature').html(thermo.temperature);

  $('#increase').click(function(){
    thermo.increase();
    $('#temperature').html(thermo.temperature);
  });

  $('#decrease').click(function(){
    thermo.decrease();
    $('#temperature').html(thermo.temperature);
  });
});
