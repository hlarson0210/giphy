var topics = ["That's So Raven", "Kim Possible", "The Suite Life of Zack & Cody", "Wizards of Waverly Place", "Phineas and Ferb", "Hannah Montana", "Even Stevens", "Phil of the Future", "Sonny with a Chance", "Cory in the House", "Recess", "Brandy & Mr. Whiskers"];

$(document).ready(function () {


  //onClick for adding the gifs with the button click
  $(document).on("click", ".button", function () {
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

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });



  //onClick for still -> animate
  $(document).on("click", "img", function () {
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#submitbtn").on("click", function () {
    if ($("#disneyShow").val() === "") {
      event.preventDefault();
      alert("Empty Selction. Try Again!");
    } else {
      event.preventDefault();
      var newButton = $("#disneyShow").val().trim();
      console.log(newButton);

      topics.push(newButton);
      console.log(topics);
      $("#disneyShow").val("");

      var showTime = $("<button>");
      showTime.append(newButton).attr("class", "button m-1").attr("data-person", newButton);
      $("#buttons").append(showTime);
    }
  })
});