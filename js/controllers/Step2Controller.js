app.controller('Step2Controller', ['$scope', 'validates', function($scope, validates) {
  
  $scope.check = "check";
  $scope.validation_trigger = true;

  $scope.exercise = 'Exercise 3 Vocabulary';
  $scope.instruction = 'What school activities do you see on the picture?';

  $scope.obj = {
    progres : "-244px;",
    control_next : "blocked",
    control_prev : ""
    };

  $scope.task1 = [ 
    { 
      nr: 1,
      icon: 'img/exercise1/1.png', 
      hint: 'enjoying a field trip',
      right_answer: 2,
      example: '2',
      good : 'hidden',
      wrong : 'hidden',
    },
    {
      nr: 2,
      icon: 'img/exercise1/2.png', 
      hint: 'working on computers',
      right_answer: 3,
      good : 'hidden',
      wrong : 'hidden'
    },
    { 
      nr: 3,
      icon: 'img/exercise1/3.png', 
      hint: 'taking a test',
      right_answer: 4,
      good : 'hidden',
      wrong : 'hidden'
    },
    {
      nr: 4,
      icon: 'img/exercise1/4.png', 
      hint: 'doing a project',
      right_answer: 1,
      good : 'hidden',
      wrong : 'hidden'
    },
    {
      nr: 5,
      icon: 'img/exercise1/5.png',
      hint: 'giving a presentation', 
      right_answer: 5,
      good : 'hidden',
      wrong : 'hidden'
    },
    {
      nr: 6,
      icon: 'img/exercise1/6.png', 
      hint: 'practising yoga',
      right_answer: 6,
      good : 'hidden',
      wrong : 'hidden'
    }
  ];

  $scope.validate = function() {
      var scope = $scope;
      validates.validation(scope);
  }
}]);