/*  Scirpt to illustrate AJAX call to a web service and the use of JSON
 *  to send and recieve data.
 */
window.onload = function() {
    // once the html page has loaded, attach the event listeners
    document.getElementById('search').addEventListener('click', function() {
        // Get ZIP Code from input
        var zipcode = document.getElementById('zip').value;

        // Make an Ajax request to https://wp.zybooks.com/weather.php
        // with the entered ZIP code passed in query string.
        // 1) Make a new request
        var xhr = new XMLHttpRequest(); 

        // 2) define an onload handler
        xhr.onload = function() {
          // This function handles the load event from the 
          // Ajax xhr object.
          if (xhr.status !== 200) {  
            // this indicates an error
            return;
          } 
          else {
                if (xhr.response.success) {
                    // assert: web server responded with data

                    // get the forecast from the response
                    var forecast = xhr.response.forecast;

                    // Update Forecast with data
                    var html = "";
                    html += "<h1>Forecast</h1>";
                    html += "<ol>";
                    //var forecast = response.forecast;

                    // build the list of forecasts
                    forecast.forEach(function(day) {
                        html += "<li>high is " + day.high + "</li>";
                    });
                    // close the ordered list
                    html += "</ol>";

                    // put the data in the document
                    document.getElementById('forecast').innerHTML = html;
                }
                else {
                    // unsuccessful lookup of weather
                    // handle the error reporting
                    var html = '<h2>Error: ' + xhr.response.error + '</h2>';
                    document.getElementById('forecast').innerHTML = html;
                }
          }
        }; //);

        // 3) open the XMLHTTP Request
        xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=" + zipcode);

        // 4) set the type of data the response contains
        xhr.responseType = 'json';

        // 5) send the response
        xhr.send();
    });
    
    document.getElementById("zip").addEventListener("change", function(){
        // remove the previous forecast
        document.getElementById("forecast").innerHTML = "";
    });
}
                                                 