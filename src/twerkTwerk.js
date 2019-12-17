var makeTwerkyDancer = function(bottom, left, timeBetweenSteps) {
  makeDancer.call(this, bottom, left, timeBetweenSteps);
  this.$node = $('<img class="twerkyDancer" src="https://i1.pngguru.com/preview/802/475/698/hannah-montana-forever-miley-cyrus-png-clipart.jpg">');
  this.setPosition(bottom, left);
};

makeTwerkyDancer.prototype = Object.create(makeDancer.prototype);
makeTwerkyDancer.prototype.constructor = makeTwerkyDancer;

makeTwerkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);
  //animation here
  this.$node.slideToggle();
};