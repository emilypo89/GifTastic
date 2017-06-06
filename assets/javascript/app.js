var animals = ["cow", "monkey", "dog", "cat", "turtle", "tiger", "lizard", "bird", "mouse", "moose"];
var animal = $("#gif-input").val();
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayAnimal() {

  var movie = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&limit=10&api_key=dc6zaTOxFJmzC";



  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) { 
    $("#animals-view").empty();
    console.log(response);
    
    for (var i = 0; i < 10; i++) {
    var activeImage = response.data[i].images.downsized_medium.url;
    var stillImage = response.data[i].images.downsized_still.url;
    var rating = response.data[i].rating;
      
      var gifDiv = $("<div>");
      gifDiv.attr("class", "gifDiv");
      $("#animals-view").append(gifDiv);
      $(gifDiv).append("<p>Rated: " + rating + "</p>");
      $(gifDiv).append("<img class='gif' src='" + stillImage + "' data-animate ='" + activeImage + "' data-still='" + stillImage + "'>");

      $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        console.log(state);

        // CODE GOES HERE
        if (state == "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }

        else if (state != "still"){
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });    
    }
  });
  }

// Function for displaying movie data
function renderButtons() {
  $("#buttons-view").html(" ");
  // Loops the array of animals and creates buttons for those animals
  for (var i = 0; i < animals.length; i++) {
     var button = $("<button>");
    button.addClass("button");
    button.attr("data-name", animals[i]);
    button.text(animals[i]);
    $("#buttons-view").append(button);
      }
}

// add gif button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gifInput = $("#gif-input").val();
  animals.push(gifInput);

  $("#gif-input").val("");
  renderButtons();
});

$(document).on("click", ".button", displayAnimal);

renderButtons();