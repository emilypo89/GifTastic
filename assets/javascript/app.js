      var animals = ["cow", "monkey", "dog", "cat"];
      var animal = $("#gif-input").val();
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";
      $(".button").click();

      // Function for displaying movie data
      function renderButtons() {
        $("#animals-view").html(" ");
        // Loop through the array of movies, then generate buttons for each movie in the array
        for (var i = 0; i < animals.length; i++) {
              var button = $("<button>");
              button.attr("class", "button");
              $("#animals-view").append(button);
              button.html(animals[i]);
            }
      }

      // This function handles events where the add movie button is clicked
      $("#add-gif").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
        var gifInput = $("#gif-input").val();
        // Write code to add the new movie into the movies array
        animals.push(gifInput);

        $("#gif-input").val("");
        // The renderButtons function is called, rendering the list of movie buttons
        renderButtons();
      });

      // Calling the renderButtons function to display the initial list of movies
      renderButtons();