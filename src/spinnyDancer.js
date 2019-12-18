var makeSpinnyDancer = function(bottom, left, timeBetweenSteps) {
  makeDancer.call(this, bottom, left, timeBetweenSteps);
  this.$node = $('<img class="spinnyDancer" src="https://library.kissclipart.com/20181210/ase/kissclipart-cow-transparent-background-clipart-holstein-friesi-aabf16afe16c0010.jpg">');
  this.setPosition(bottom, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);
  //animation here
  this.$node.animate({left: '250px', right: '500px'});
};