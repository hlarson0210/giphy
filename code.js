var topics = [];

$(document).ready(function () {

  var showName = topics;
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&api_key=dSUbO9QtEKXZOGiknY1zHY00lnCU27i5&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (topics) {
    // this line is grabbing the data from the ajax call for initial onload of page
    var show = topics.data;
    for (var i = 0; i < show.length; i++) {

    }

  });

});

//onClick for adding the gifs with the button click
$("button").on("click", function () {
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dSUbO9QtEKXZOGiknY1zHY00lnCU27i5&limit=10&rating=g&rating=pg";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.original_still.url);
        personImage.attr("data-state", "still");
        personImage.attr("data-still", results[i].images.original_still.url);
        personImage.attr("data-animate", results[i].images.original.url);
        personImage.attr("class", "gif");

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);
        console.log(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});



//onClick for still -> animate
$(".gif").on("click", function () {
  var state = $(this).attr("data-state")
  console.log(state);

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});