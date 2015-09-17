app.controller('Step1Controller', ['$scope', 'validates', function($scope, validates) {

  $scope.check = "check";   
  $scope.validation_trigger = true;  // dla buttona walidującego

  $scope.exercise = 'Exercise 3 Vocabulary';
  $scope.instruction = 'Label the weather symbols';

  $scope.obj = {   // dla dolnego paska nawigacyjnego (directives/progres-bar)
    progres : "-184;",
    control_prev : "blocked",
    control_next : "",
    };

  $scope.task1 = [     // główny obiekt z zadaniem
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
  ];

  $scope.validate = function() {  //import funkcji z services
      var scope = $scope;
      validates.validation(scope);
  }
}]); // Step2Controller analogicznie