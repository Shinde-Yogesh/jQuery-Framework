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

$("input").keypress(function(event)
{
    console.log(event.key)
})

//for the body
$("body").keypress(function(event)
{
    console.log(event.key)
})

//change the h1 text
$("body").keypress(function(event)
{
    $("h1").text(event.key)
})