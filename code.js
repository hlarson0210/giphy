var topics = []

$(document).ready(function () {

  var showName = "";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&api_key=dSUbO9QtEKXZOGiknY1zHY00lnCU27i5&limit=10";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (topics) {
    // this line is grabbing the data from the ajax call for initial onload of page
    var show = topics.data;
    for(var i = 0; i < show.length; i++){

    }

  });

})

//onClick for adding the gifs with the button click
$("button").on("click", function () {
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});



//onClick for still -> animate
$(".gif").on("click", function () {
  // STEP ONE: study the html above.
  // Look at all the data attributes.
  // Run the file in the browser. Look at the images.

  // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

  // STEP TWO: make a variable named state and then store the image's data-state into it.
  // Use the .attr() method for this.


  // ============== FILL IN CODE HERE FOR STEP TWO =========================
  var state = $(this).attr("data-state")
  console.log(state);
  // =============================================

  // STEP THREE: Check if the variable state is equal to 'still',
  // then update the src attribute of this image to it's data-animate value,
  // and update the data-state attribute to 'animate'.

  // If state is equal to 'animate', then update the src attribute of this
  // image to it's data-still value and update the data-state attribute to 'still'
  // ============== FILL IN CODE HERE FOR STEP THREE =========================

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

  // ==============================================

  // STEP FOUR: open the file in the browser and click on the images.
  // Then click again to pause.
});