

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


//intial values 
var trainStation = ""; 
var trainId = 0;
var trainDest = "";
var firstDept = 0;
var trainFrequency = $("#train-frequency").val().trim();
var arrivalTime;
var arrivalCountDown;
var trainPlatform = "";



$("#addTrain").on("click", function (event) {
    event.preventDefault();

    console.log("did i get clicked ");
    //store all values
    trainStation = $("#train-station").val().trim();
    trainId = $("#train-id").val().trim();
    trainDest = $("#train-destination").val().trim();
    firstDept = $("#first-departure").val().trim();
    arrivalTime = currentTime;
    arrivalCountDown = currentTime;
    trainPlatform = $("#train-platform").val().trim();

    //code for the push
    dataRef.ref().push({

        trainStation: trainStation,
        trainId: trainId,
        trainDest: trainDest,
        firstDept: firstDept,
        trainPlatform: trainPlatform,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
});

dataRef.ref().on("child_added", function (childSnapshot) {




    // full list of items to the wall
    $('#train-schedule-body').append(
        '<tr>' +
        '<td>' + childSnapshot.val().trainStation + '</td>' +
        '<td>' + childSnapshot.val().trainId + '</td>' +
        '<td>' + childSnapshot.val().trainDest + '</td>' +
        '<td>' + childSnapshot.val().arrivalTime + '</td>' +
        '<td>' + childSnapshot.val().arrivalCountDown + '</td>' +
        '<td>' + childSnapshot.val().stationPlatform + '</td>' +
        
        '</tr>'
    );

    // Handle the errors
},);

