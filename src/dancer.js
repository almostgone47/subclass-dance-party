var makeDancer = function(bottom, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(bottom, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(bottom, left) {
  var styleSettings = {
    bottom: bottom,
    left: left,
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.$node.css({"bottom": "50", "left":"20"});
};
