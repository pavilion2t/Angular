### Binding  
* DEclaring your ng-app  
* AngularJS directives  
* ng-model directive  
* {{}} expression    


### Modules, contrillers, and scope  
* module(), ng-app  
* controller(), ng-controller  
* $scope   

```  
// app.js 
var myApplication = angular.module('myApp', []);   

myApp.controller('MyController', function MyController($scope) {
  $scope.artist = { 
    "name": "Barot",  
    "shortname": "B",
  });   
```     

```   
// html.index    
<script src="./app.js"></script>  
<html ng-app>   
  <body ng-controller = "MyController">   
    <div>{{artist.name}}</div>
  </body>
</html>   
```   

### Basic debugging and ngSrc   
  %7B  => curly braces   
  ```
  ng-src = " "  
  ```   
  The buggy way to write it:    
  ```   
  <img src="http://www.gravatar.com/avatar/{{hash}}" alt="Description"/>    
  ```    
  The correct way to write it:    
  ```   
  <img ng-src="http://www.gravatar.com/avatar/{{hash}}" alt="Description" />   
  ```   
  
### Conditionals and loops   
* ng-show, ng-hide  
* ng-if   
* ng-repeat     

### Using the $http service to read a JSON file   
* $http   
* Runs with a server   
* Returns a promise   


```  
// app.js 
var myApplication = angular.module('myApp', []);   

myApp.controller('MyController', function MyController($scope, $http) {
  $http.get('data.json').then(function(response) {
    $scope.artist = response.data;
  });
``` 

