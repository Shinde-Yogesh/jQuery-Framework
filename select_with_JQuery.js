//for custom animation
// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 }); //second parameter must be numeric value
// });


//for multiple
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); //second parameter must be numeric value
});
