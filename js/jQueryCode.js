function main() {

//hide all the answers
$('.answer').hide();

$('main h2').click((e) => {
  if ($(e.currentTarget).next('.answer').is(':hidden')) {
    $('.answer').filter(':visible').slideUp()
    $('main h2').addClass('close')

    $(e.currentTarget).next('.answer').slideDown();
    } else {
      $(e.currentTarget).next('.answer').slideUp();
    }
    $(e.currentTarget).toggleClass('close');

  });//end of click function
}

  $(document).ready(main)

// function main() {
//
// $('p').hide()
//
// $('h2').on('click', (e) => {
//
//   $(this).toggleClass('active')
//
//   $(e.currentTarget).next().slideToggle(500)
//
//   $(e.currentTarget).next().toggleClass('close')
// })
//
//
//
//
//
// }
//
// $ (document).ready(main)
