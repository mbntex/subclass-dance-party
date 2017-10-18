
var makePersonDancer = function(top, left, timeBetweenSteps) {
 // top = 700;
  var roll = Math.floor(Math.random()*100) + 600;
  top = roll;
  makeDancer.call(this, top, left, timeBetweenSteps, 'personClass');
};
 

  makePersonDancer.prototype = Object.create(makeDancer.prototype);
  makePersonDancer.prototype.constructor = makePersonDancer;
  makePersonDancer.prototype.step = function() {
    var oldStep = makeDancer.prototype.step;
    oldStep.call(this);
  };
  makePersonDancer.prototype.whenRains = function() {
    this.parentNode.removeChild(this);
  };


