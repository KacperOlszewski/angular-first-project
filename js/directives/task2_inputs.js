app.directive('secondTaskinputs', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/task2_inputs.html' 
  }; 
});