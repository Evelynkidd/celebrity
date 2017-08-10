//business logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
  var genre = parseInt($("#favorite-genre").val());
  var color = parseInt($("#favorite-color").val());
  var band = parseInt($("#favorite-band").val());

  var result = genre + color + band;
  console.log(result);

    if (result === 3) {
      $("#person1").show();
    }
    else if (result > 5) {
      $("#person2").show();
    }
    else if (result < 3 ) {
      $("#person3").show();
    }
    else {
      $("p").show();
    }
  });
});

//user-interface
// $(document).ready(function() {
//   $("#quiz").submit(function(event) {
//     // var celebrityresult = $("#favorite-genre").val();
//   var genreInput = $("#favorite-genre").val();
//   var colorInput = $("#favorite-color").val();
//   var bandInput = $("#favorite-band").val();
//
//   $("#results").text(genreInput);
//   $("#results2").text(colorInput);
//   $("#results3").text(bandInput);
//
//
//   $("#results").show();
//   $("#results2").show();
//   $("#results3").show();
//
//
//   event.preventDefault();
//
//   });
// });
