var makeCrimeDancer = function(top, left, timeBetweenSteps) {
  top = 700;
  makeDancer.call(this, top, left, timeBetweenSteps, 'crimeClass');
  var context = this;
  $(this.$node).on('click', function(){this.parentNode.removeChild(this);});
  //WHY IS THIS NOT WORKING??? $(this.$node).on('click', function(){this.$node = $('<span class="personClass"></span>')});
};

  makeCrimeDancer.prototype = Object.create(makeDancer.prototype);
  makeCrimeDancer.prototype.constructor = makeCrimeDancer;
  

 



