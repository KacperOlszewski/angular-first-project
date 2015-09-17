app.controller('Step1Controller', ['$scope', function($scope) {
  $scope.check = "check",   // klasa dla buttons sprawdzającego
  $scope.exercise = 'Exercise 3 Vocabulary',
  $scope.instruction = 'Label the weather symbols',
  $scope.obj = {
    progres : "-184;",
    control_prev : "blocked",
    control_next : "",
    };
  $scope.task1 = [ 
    { 
      nr: 1,
      icon: 'img/exercise2/1.png', 
      right_answer: 'foggy',
      this_example: 'Example:',
      example: 'foggy',
      good : 'hidden',
      wrong : 'hidden',
      order : 4
    },
    {
      nr: 2,
      icon: 'img/exercise2/2.png', 
      right_answer: 'raining',
      good : 'hidden',
      wrong : 'hidden',
      order : 3
    },
    { 
      nr: 3,
      icon: 'img/exercise2/3.png', 
      right_answer: 'sunny',
      good : 'hidden',
      wrong : 'hidden',
      order : 6
    },
    {
      nr: 4,
      icon: 'img/exercise2/4.png', 
      right_answer: 'cloudy',
      good : 'hidden',
      wrong : 'hidden',
      order : 2
    },
    {
      nr: 5,
      icon: 'img/exercise2/5.png', 
      right_answer: 'windy',
      good : 'hidden',
      wrong : 'hidden',
      order : 5
    },
    {
      nr: 6,
      icon: 'img/exercise2/6.png', 
      right_answer: 'snowing',
      good : 'hidden',
      wrong : 'hidden',
      order : 1
    }
  ],

  $scope.validation_trigger = true,

  $scope.validate = function() {    //Walidacja poprawności wprowadzonej odpowiedzi  (input value = right_answer)

    if($scope.validation_trigger) {
      for (i = 0; i < $scope.task1.length; i++) {

          if (typeof $scope.task1[i].answer !== 'undefined') {
              var filtered = $scope.task1[i].answer.toLowerCase();    //ignorowanie spacji i dużych znaków
              filtered = filtered.replace(/\s/g, '');
              $scope.task1[i].answer = filtered;                     
              console.log(filtered)
              if ($scope.task1[i].right_answer == filtered) {
                  $scope.task1[i].good = 'display' 
              }
              else {
                  $scope.task1[i].wrong = 'display' 
              }
          }
          else {
             $scope.task1[i].wrong = 'display' 
          }
        }

        $scope.validation_trigger = false; 
        $scope.check = "refresh"
      }
    else {
      for (i = 0; i < $scope.task1.length; i++) {
        $scope.task1[i].wrong = 'hidden';
        $scope.task1[i].good = 'hidden';
      };
      $scope.validation_trigger = true;
      $scope.check = "check"
    }
  }
}]);