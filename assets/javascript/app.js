
var timepicker = new TimePicker('time', {
    lang: 'en',
    theme: 'dark'
  });
  timepicker.on('change', function(evt) {
    
    var value = (evt.hour || '00') + ':' + (evt.minute || '00');
    evt.element.value = value;
  
  });



var currentTime = moment().format("h:mm");
var trainDeparture = 30;



//intial values 
var trainStation = ""; 
var trainId = 0;
var trainDest = "";
var firstDept = 0;
var trainFrequency = $("#train-frequency").val().trim();
var arrivalTime;
var arrivalCountDown;
var trainPlatform = "";

$('#testing').on('click', function(){
    
 var updateFreqTime = moment(trainFrequency, "hh:mm")
 console.log(moment(trainFrequency, "hh:mm"))
})

console.log(moment(trainDeparture, "hh:mm"))
// First Time (pushed back 1 year to make sure it comes before current time)
var trainDepartureCoverted = moment(trainDeparture, "hh:mm").subtract(1, 'years');

console.log('train departure converted ' + trainDepartureCoverted)

//difference between the times
var diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");
console.log('show difference ' + diffTime)

    // Time apart (remainder)
 var timeRemainder = diffTime % trainFrequency;
 console.log('reminder ' + timeRemainder)

   //minutes until Train
   var minutesAway = trainFrequency - timeRemainder;
   minutesAway = moment().startOf('day').add(minutesAway, 'minutes').format('HH:mm');
   console.log('minutes until train ' + minutesAway)

   


   //capture Frequency 


     
   /*nextArrival: () => {
	    // First Time (pushed back 1 year to make sure it comes before current time)
	    var trainDepartureCoverted = moment(trainDeparture, "hh:mm").subtract(1, 'years');
	    // get Current Time
	    var currentTime = moment();
	    //difference between the times
	    var diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");
	    // Time apart (remainder)
	    var timeRemainder = diffTime % trainFrequency;
	    //minutes until Train
	    var timeInMinutesTillTrain = trainFrequency - timeRemainder;
	    //Next Train
	    nextTrain = moment().add(timeInMinutesTillTrain, 'minutes');
	    nextTrain = moment(nextTrain).format('h:mm A');
	},
*/




//display current time
$(".currentTime").text(moment().format("h:mm A"));





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

