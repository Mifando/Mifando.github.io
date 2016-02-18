$(function() {

  // jCarousel INITial config jCarousel
  $('.jcarousel')
    .jcarousel({
      animation: {
        duration: 400,
        easing:   'linear',
        // complete: function() {}
      },
      center: true,
      //wrap: 'both'
    })
    .jcarousel('scroll', '+=2');
  

  // jCarousel CONTROLS 
  $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
  });

  $('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
  });

  // jCarousel PAGINATION
  
  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
     })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination({
      item: function(page) {
        return '<a href="#' + page + '" class="jc-pagination-link">' + page + '</a>';
      }
    });

  // fancySelect

  var mySelect = $('.my-select');
  mySelect.fancySelect();

  mySelect.append('<option>Foo</option><option>Bar</option>');
  mySelect.trigger('update'); 

  // dropdown menu

  $('.dropdown').hover(mouseIn, mouseOut);

  function mouseIn(){
    $(this).children('.sub-menu').slideDown(200);
  };
  
  function mouseOut(){
    $(this).children('.sub-menu').slideUp(200);
  };


});