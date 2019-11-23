/*
 Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. 
 This website will provide up-to-date information about various trains, namely 
 their arrival times and how many minutes remain until they arrive at their station.


LETS PLAN

- Create Input Area for Train Information
  <form>


  --jumbotrion with current time 

  Table -- 
  -Train Name 
  -Train ID
  -Frequency of train arrival 
  -time of arrival 
  -time till arrival 


  -Form to innput new train 
    -Train Name 
    -Train ID
    -Frequency of train arrival 
    -First Departure time 

*/

//display current time 
$('.currentTime').text(moment().format('h:mm:ss A'));

var currentTime = (moment().format('h:mm:ss'));