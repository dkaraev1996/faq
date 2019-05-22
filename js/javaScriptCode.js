function hide() {
var x = document.classList.contains("answer");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}


document.getElementsByClassName("close").addEventListener("click", collapse);

function collapse() {
  hide();

}
// function main() {
//
// //hide all the answers
// $('.answer').hide();
//
// $('main h2').click((e) => {
//   if ($(e.currentTarget).next('.answer').is(':hidden')) {
//     $('.answer').filter(':visible').slideUp()
//     $('main h2').addClass('close')
//
//     $(e.currentTarget).next('.answer').slideDown();
//     } else {
//       $(e.currentTarget).next('.answer').slideUp();
//     }
//     $(e.currentTarget).toggleClass('close');
//
//   });//end of click function
// }
//
//   $(document).ready(main)
