      var animals = ["cow", "monkey", "dog", "cat"];
      var animal = $("#gif-input").val();
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";
      $(".button").click();

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayAnimal() {

        var movie = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&limit=10&api_key=dc6zaTOxFJmzC";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) { 
         
          console.log(response);
          for (var i = 0; i < 10; i++) {
            $("#animals-view").append("<p>Rated: " + response.data[i].rating + "</p>");
            $("#animals-view").append("<img src='" + response.data[i].url + "'>");
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