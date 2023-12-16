// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "yellow";
//   });
// }

//using the jquery
$("button").click(function()
{
    $("h1").css("color","cyan")
})