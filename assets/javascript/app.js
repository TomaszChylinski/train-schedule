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


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAyeAyFNzctgu4iTvZ0oQaqNmyRvjivPpk",
    authDomain: "train-schedule-f7941.firebaseapp.com",
    databaseURL: "https://train-schedule-f7941.firebaseio.com",
    projectId: "train-schedule-f7941",
    storageBucket: "train-schedule-f7941.appspot.com",
    messagingSenderId: "618237921355",
    appId: "1:618237921355:web:c216b2f27a63b8e47f25ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//display current time
$(".currentTime").text(moment().format("h:mm A"));

var currentTime = moment().format("h:mm");



$("#addTrain").on("click", function () {
    console.log("did i get clicked ");
    //store all values
    var trainNumber = $("#train-number").val().trim();
    var trainLine = $("#train-line").val().trim();
    var trainDest = $("#train-destination").val().trim();
    var trainDept = $("#train-departure").val().trim();
    var trainPlatForm = $("#train-platform").val().trim();


    $('#train-schedule-body').append(
        '<tr>' +
        '<td' + trainNumber + '</td>' +
        '<td>' + trainLine + '</td>' +
        '<td>' + trainDest + '</td>' +
        '<td>' + trainDept + '</td>' +
        '<td>' + trainPlatForm + '</td>' +
        '</tr>'
    );
});