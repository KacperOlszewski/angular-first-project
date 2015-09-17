app.factory('validates', function() {   //Ogólna funkcja walidacji poprawności wprowadzonej odpowiedzi  (input value = right_answer)
	return {

	validation: function(scope) {  

	    if(scope.validation_trigger) {
	      for (i = 0; i < scope.task1.length; i++) {

	          if (typeof scope.task1[i].answer !== 'undefined') {
	              var filtered = scope.task1[i].answer.toLowerCase();    //ignorowanie spacji i dużych znaków
	              filtered = filtered.replace(/\s/g, '');
                  

	              if (scope.task1[i].right_answer == filtered) {     //sprawdzam czy wartość inputa jest równa right_answer
	                  scope.task1[i].good = 'display'  				// wyświetlanie grafiki correct bądź wrong 
	              }
	              else {
	                  scope.task1[i].wrong = 'display' 
	              }
	          }
	          else {
	             scope.task1[i].wrong = 'display' 
	          }
	        }

	        scope.validation_trigger = false;    //dla buttona walidacyjnego
	        scope.check = "refresh"
	      }

	    else {
	      for (i = 0; i < scope.task1.length; i++) {
	        scope.task1[i].wrong = 'hidden';
	        scope.task1[i].good = 'hidden';
	      };
	      scope.validation_trigger = true;
	      scope.check = "check"
	    }
	  }
	};
});
