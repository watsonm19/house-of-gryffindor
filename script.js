// const questions = [{
//   number: 1,
//   question: 'What is it?',
//   answers: [{
//     a: "first correct answer",
//     b: "second wrong answer",
//     c: "third wrong answer",
//     d: "third wrong answer",
//   }],
//   correctAnswer: "first correct answer"
// },
//   {
//     number: 2,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second correct answer",
//       c: "third wrong answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "second correct answer"
//   },
//   {
//     number: 3,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second wrong answer",
//       c: "third correct answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "third correct answer"
//   },
//   {
//     number: 4,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second wrong answer",
//       c: "third wrong answer",
//       d: "fourth correct answer",
//     }],
//     correctAnswer: "fourth correct answer"
//   },
//   {
//     number: 5,
//     question: 'What is it?',
//     answers: [{
//       a: "fifth correct answer",
//       b: "second wrong answer",
//       c: "third wrong answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "fifth correct answer"
//   }];


function QuizViewModel() {
  const self = this;

  // Get value of checked (correct, incorrect, or null) Use `data-bind` to get value
  // Clean this up (DRY), this is just to get the quiz working
  var userSelections = ko.observableArray();
  userSelections.push(self.userSelection1 = ko.observable(),
    self.userSelection2 = ko.observable(),
    self.userSelection3 = ko.observable(),
    self.userSelection4 = ko.observable(),
    self.userSelection5 = ko.observable(),)


  // Start quiz
  self.start = function() {
    self.clear() // Clear quiz on page load
    $("#start").hide(); // Hide start button
    $(".sub-header").hide() // Hide subheader
    $("#crest").hide() // Hide crest
    $("#summary").hide() // Hide summary
    $("#quiz").show(); // Show quiz
  };

  // Clear quiz on button click
  self.clear = function() {
    $('input[type="radio"]').prop('checked', false);
  }

  self.getAnswer = function() {
    let chosenAnswer = $('input[type="radio"]').checked;

  }

  // Submit quiz
  self.submit = function() {
    $("#quiz").hide(); // Hide quiz
    $('#summary').show(); // Show results

    // Get value of checked (correct, incorrect, or null) Use `data-bind` to get value
    // If checked correct < 6 return Beginner, else if checked correct > 5 && < 8 return Novice, else return Expert
    // For all checked incorrect display in summary page
    // Show results (rank, score: percentage, list of incorrect answers)
    // Show results
    console.log("submit button works")
    console.log(userSelections());
    console.log(self.results());
  }

  // Results (might not need this; the observableArray is doing the same thing
  self.results = ko.computed(function() {
    // Tally up amount of correct answers and display
    return userSelections();
  }, self)
}

ko.applyBindings(new QuizViewModel());

