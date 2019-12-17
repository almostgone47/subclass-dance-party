var makeBlinkyDancer = function(bottom, left, timeBetweenSteps) {
  makeDancer.call(this, bottom, left, timeBetweenSteps);
  this.$node = $('<img class="blinkyDancer" src="https://cdn3.iconfinder.com/data/icons/halloween-2142/128/casper_friendly_ghost_halloween_haunt_pacman_spirit-512.png">');
  this.setPosition(bottom, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);
  this.$node.toggle();
};