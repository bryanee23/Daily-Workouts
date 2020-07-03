/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

// Local Storage Utility Functions
//get item
  // code goes here
  var getItem = function(key) {
    return window.localStorage.getItem(key);
  }

//create
  // code goes here
  var createItem = function(key, value) {
    window.localStorage.setItem(key, value)
    return 'item set'
  }

//update
  // code goes here
  var updateItem = function(key, value) {
    localStorage.setItem(key, value)
    return 'item updated'
  }

//delete
  // code goes here
  var deleteItem = function(key) {
    return localStorage.removeItem(key);
  }

//clear everything
  // code goes here
  var clearAll = function() {
    return localStorage.clear();
  }

// key exists?
  // code goes here
  var keyExists = function(key) {
    var existingValue = window.localStorage[key];
    return existingValue !== undefined
  }

  //fucntion to display all workouts onto edit-container id
  function editWorkoutDisplay () {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(var i=0; i<daysOfWeek.length; i++){
      var container = document.getElementById(daysOfWeek[i])//getElementById("sunday")
      //edge cases, if element is undefined put up an alert
      var key = daysOfWeek[i];
      var value = window.localStorage.getItem(key) //getItem("sunday")
        // container.innerHTML += `${key} ${value} <br />`
      if(value === null) {
        container.innerHTML += `${key} (no activity found) <br />`
      } else {
        container.innerHTML += `${key} - ${value} <br />`
      }
    }
  }

   //fucntion to display all workouts onto display id
   function currentDayWorkout (input) {
      var container = document.getElementById("display")//getElementById("sunday")
      //change this key into the value
      var key = input;
      var value = window.localStorage.getItem(key) //getItem("sunday")
      if(value === null) {
        container.innerHTML = `${key} (no activity found) <br />`
      } else {
        container.innerHTML = `${key} - ${value} <br />`
      }
  }

  function kobeQuotes () {
    var obj = {
      0: "Haters are a good problem to have. Nobody hates the good ones. They hate the great ones.",
      1: "Trust me, setting things up right from the beginning will avoid a ton of tears and heartache…",
      2: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.",
      3: "Once you know what failure feels like, determination chases success.",
      4: "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
      5: "I’m reflective only in the sense that I learn to move forward. I reflect with a purpose.",
      6: "We all have self-doubt. You don’t deny it, but you also don’t capitulate to it. You embrace it.",
      7: " - Kobe Bryant",
    }
  var container = document.getElementById("top-container-quote")//getElementById("sunday")
  var key = Math.floor(Math.random() * 6)
  container.innerHTML = `"${obj[key]}" <br/>${obj[7]}`
  }





///////////////////////////////////////////
$(document).ready(function() {

  editWorkoutDisplay()
  console.log('it works')


//// Navigation buttons ////
  $('#edit-workout-link').click(function(event) {
    event.preventDefault();
    $("#edit-container").toggle();
  });

  $('#show-button').click(function(event) {
    event.preventDefault();

    var currentKey = $('#todays-inp-key').val();
    //want Sunday, if SUnDay

   currentKey = currentKey.slice(0,1).toUpperCase() + currentKey.slice(1,currentKey.length).toLowerCase()

    currentDayWorkout (currentKey)
    $("#display").toggle();
  });



//// today's workouts buttons ////
    $('#Sunday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Sunday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Monday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Monday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Tuesday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Tuesday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Wednesday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Wednesday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Thursday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Thursday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Friday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Friday")
      $("#display").toggle();
      kobeQuotes()
    });

    $('#Saturday-today').click(function(event) {
      event.preventDefault();
      currentDayWorkout ("Saturday")
      $("#display").toggle();
      kobeQuotes()
    });


  $('#create-button').click(function(event) {
    event.preventDefault();
    //at the press of this, create the item and display it
    var currentKey = $('#inp-key').val();
    currentKey = currentKey.slice(0,1).toUpperCase() + currentKey.slice(1,currentKey.length).toLowerCase()
    // read the value from the input field
    var currentValue = $('#inp-value').val();
    //if key already esists, out put alert
    if (keyExists(currentKey)) {
      //alert("Key already exists, try again");
    } else {
    //store key and values into local storage
      createItem(currentKey,currentValue)

    }
    location.reload()
  });

  $('#update-button').click(function(event) {
    event.preventDefault();
    //at the press of this, create the item and display it
    var currentKey = $('#inp-key').val();
    // read the value from the input field
    currentKey = currentKey.slice(0,1).toUpperCase() + currentKey.slice(1,currentKey.length).toLowerCase()
    var currentValue = $('#inp-value').val();
    console.log(currentKey, $('#inp-key').val())
    //if key already esists, out put alert
    if (keyExists(currentKey)) {
      alert("do you want to override?");
      createItem(currentKey,currentValue)    //store key and values into local storage

    }
    location.reload()
  });

  $('#delete-button').click(function(event) {
    event.preventDefault();
    //at the press of this, create the item and display it
    var currentKey = $('#inp-key').val();
    currentKey = currentKey.slice(0,1).toUpperCase() + currentKey.slice(1,currentKey.length).toLowerCase()
    // read the value from the input field
    var currentValue = $('#inp-value').val();
    //if key already esists, out put alert
    if (keyExists(currentKey)) {
      alert("confirmm delete")
      deleteItem(currentKey)
    } else {
      alert("no items to delete")
    }
    location.reload()
  });

  $('#clear-button').click(function(event) {
    event.preventDefault();
    //at the press of this, create the item and display it
    var currentKey = $('#inp-key').val();
    // read the value from the input field
    var currentValue = $('#inp-value').val();
    //if key already esists, out put alert
    alert("confirm to clear all data")
    alert("are you really sure?")
    alert("for sure? for sure?")
    clearAll()
    location.reload()
  });



});

