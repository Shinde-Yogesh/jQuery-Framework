$("h1").on("mouseover", function () {
  $("h1").css("color", "lite blue");
});


//new button created
$("h1").before("<button> prev </button>");
$("h1").after("<button> next </button>");

//before and the after addt the before the attribute
//and the append and prepend add into the button tag

//remove the button
$("button").remove();
