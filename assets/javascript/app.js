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
    apiKey: "AIzaSyAqZNrflv1yu9USlZXzkiybAlT_-cFTuUA",
    authDomain: "train-schedule-hw-53a0f.firebaseapp.com",
    databaseURL: "https://train-schedule-hw-53a0f.firebaseio.com",
    projectId: "train-schedule-hw-53a0f",
    storageBucket: "train-schedule-hw-53a0f.appspot.com",
    messagingSenderId: "786492117314",
    appId: "1:786492117314:web:3e2f837e65c4cbee9cf8db",
    measurementId: "G-32LNSGDLTN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var dataRef = firebase.database();

//display current time
$(".currentTime").text(moment().format("h:mm A"));

var currentTime = moment().format("h:mm");


//intial values 
var trainNumber = 0;
var trainLine = "";
var trainDest = "";
var trainDept = 0;
var trainPlatForm = "";


$("#addTrain").on("click", function (event) {
    event.preventDefault();
    console.log("did i get clicked ");
    //store all values
     trainNumber = $("#train-number").val().trim();
     trainLine = $("#train-line").val().trim();
     trainDest = $("#train-destination").val().trim();
     trainDept = $("#train-departure").val().trim();
     trainPlatForm = $("#train-platform").val().trim();

    //code for the push
    dataRef.ref().push({
        
        trainNumber:trainNumber,
        trainLine: trainLine,
        trainDest:trainDest,
        trainDept:trainDept,
        trainPlatForm:trainPlatForm
    })
});

dataRef.ref().on("child_added", function(childSnapshot) {


    console.log(childSnapshot.val().trainNumber);
    console.log(childSnapshot.val().trainLine);
    console.log(childSnapshot.val().trainDest);
    console.log(childSnapshot.val().trainDept);
    console.log(childSnapshot.val().trainPlatForm);


   // full list of items to the wall
$('#train-schedule-body').append(
    '<tr>' +
    '<td' + trainNumber + '</td>' +
    '<td>' + trainLine + '</td>' +
    '<td>' + trainDest + '</td>' +
    '<td>' + trainDept + '</td>' +
    '<td>' + trainPlatForm + '</td>' +
    '</tr>'
);

})