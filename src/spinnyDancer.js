var makeSpinnyDancer = function(bottom, left, timeBetweenSteps) {
  makeDancer.call(this, bottom, left, timeBetweenSteps);
  this.$node = $('<img class="spinnyDancer" src="https://i1.pngguru.com/preview/802/475/698/hannah-montana-forever-miley-cyrus-png-clipart.jpg">');
  this.setPosition(bottom, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);
  //animation here
  this.$node.animate({left: '250px', right: '500px'});
};