$(document).ready(function() {
    // log in here
   

   



  //url maker
   /* var urlMaker = function(text){
      return ;
    };
    console.log(urlMaker("stuff"));*/
    
    
   $('#cities').click(function() {
    var text =  $("#cityInput").val();
    var url = 'http://autocomplete.wunderground.com/aq?query=' + text + '&cb=?';
    console.log(url);
    $.getJSON(url, function(data){
        var cities = data.RESULTS;
        console.log( cities );
        for(var i=0; i < cities.length; i++) {
          var city = cities[i];          
          $("#cityData").append("<li data-url='http://api.wunderground.com/api/e401293040a26d38/forecast'" + city.l + "<li>" + city.name + "</li>");  
          console.log(city.l); 
        } 

        var lis = $("li");

        /*for (var j = 0; j < lis.length; j++ ) {
          lis[j].click(function() {
              $.getJSON()
          }
        }*/
          
      
    }); 
  }); 
});
//    http://api.wunderground.com/api/e401293040a26d38/forecast/' + city.l

