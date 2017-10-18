var makeLightDancer = function(top, left, timeBetweenSteps) {
  //var roll = Math.floor(Math.random() * 100) + 100;
  var options = [[570, 980], [616, 831], [636, 811], [616, 811], [620, 900], [600, 1000], [587, 1357], [750, 1307], [700, 1397], [720, 1397], [750, 1397], [650, 767], [580, 1397], [630, 1000], [670, 800], [580, 1397], [700, 1197], [630, 990], [610, 850], [640, 910], [640, 1100], [630, 1000], [595, 1250], [610, 1200], [725, 1210], [690, 960], [680, 910], [600, 1350], [615, 1235], [639, 1035], [720, 1050], [690, 1015]];
  var roll = Math.floor(Math.random() * options.length);
  // top = 570;
  // left = 980;
  top = options[roll][0];
  left = options[roll][1];


  makeDancer.call(this, top, left, timeBetweenSteps, 'lightClass');
};

  makeLightDancer.prototype = Object.create(makeDancer.prototype);
  makeLightDancer.prototype.constructor = makeLightDancer;

  makeLightDancer.prototype.step = function() {
    var oldStep = makeDancer.prototype.step;
    oldStep.call(this);
    this.$node.toggle();
  };








