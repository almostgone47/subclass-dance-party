//To delete dancers on click
$('body').on('click', function(event) {
  if ($(event.target).is('img')) {
    event.target.style.display = 'none';
  }
});

//To line dancers up
$('body').on('click', function(event) {
  if (event.target.id === 'alignDancers') {
    makeBlinkyDancer.lineUp();
  }
});
