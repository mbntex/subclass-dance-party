var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.ruinDay();
  // this.classBeingMade = 'bouncyClass';
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
  makeBouncyDancer.prototype.constructor = makeBouncyDancer;

  makeBouncyDancer.prototype.step = function() {
    var oldStep = makeDancer.prototype.step;
    oldStep.call(this);
    this.$node.toggle();
  };

  makeBouncyDancer.prototype.ruinDay = function() {
    window.dancers.forEach(function(item) {
    for(var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makePersonDancer) {
        //console.log('delete');
        console.log(window.dancers[i]);
        console.log(window.dancers[i].$node);
        console.log(window.dancers[i].parentNode);
        window.dancers[i].classBeingMade = 'voided';
        //delete window.dancers[i];
        //window.dancers[i].whenRains();
        //window.dancers[i].parentNode.removeChild(this);
        //window.dancers.splice(i, 1);
      }
    }
    })
  };


