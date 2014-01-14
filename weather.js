$(document).ready(function() {

   $('#cities').click(function() {
    var text =  $("#cityInput").val();
    var url = 'http://autocomplete.wunderground.com/aq?query=' + text + '&cb=?';
    console.log(url);

  $.getJSON(url, function(data){
      var cities = data.RESULTS;
      console.log( cities );
      for(var i=0; i < cities.length; i++) {
        var city = cities[i];  
        var key = "e401293040a26d38"        
        $("ul").append("<li data-url='" + "http://api.wunderground.com/api/" + key + "/forecast" + city.l + ".json'>" + city.name + "</li>");  
      } 
    }); 
  });

  $("body").delegate('li', 'click', function(){
          var url = $(this).attr("data-url");

          $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
              console.log(data);
              $("#weatherReport").append("<p>" + data.forecast.txt_forecast.forecastday[0].fcttext +"</p>");

              //add icon image
              $("#icon").append("<div>" + data.forecast.txt_forecast.forecastday[0].icon_url +"</div>");
            }
          })
      });

  function weather(data) {
    
  }
});

