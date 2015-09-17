app.directive('passObject', function() {
    return {
        restrict: 'E',
        scope: { obj: '=' },
        templateUrl: 'js/directives/progres-bar.html' 
    };
});