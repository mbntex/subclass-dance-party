

var makeBalloonDancer = function(top, left, timeBetweenSteps) {
  top = 50;
  left = 100;
  makeDancer.call(this, top, left, timeBetweenSteps, 'balloonClass');
  var context = this;
  //$(this.$node).on('click', function(){this.parentNode.removeChild(this);});
  //WHY IS THIS NOT WORKING??? $(this.$node).on('click', function(){this.$node = $('<span class="personClass"></span>')});
};
 
  makeBalloonDancer.prototype = Object.create(makeDancer.prototype);
  makeBalloonDancer.prototype.constructor = makeBalloonDancer;
  makeBalloonDancer.prototype.whenClicked = function() {

  };

  








