$('#alignDancers').on('click', function() {
  window.dancers.forEach(dancer => dancer.addClass('alignLeft'));
  console.log('clicked', window.dancers);
});