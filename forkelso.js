$("#cat-button").on("click", function() {

    //Jquery --> string, what we will submit to the api
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    //making an api request 
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //.then= waits until the response comes back then run function 
      .then(function(response) {
        console.log(response)
        

      //using dot notation to traverse the "object" using JSON- the image url
        var imageUrl = response.data.image_original_url;

        //creating an image dive
        var catImage = $("<img>");

        //adding an attributes to the image div-
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        //putting the cat image on to the page inside the image div
        $("#images").prepend(catImage);
      });
  });