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


[Tips and Tricks](https://www.lynda.com/Angular-tutorials/One-time-binding/597030/611899-4.html)
Ng-show and its sibling ng-hide toggle the appearance of the element by adding the CSS property "display: none". Ng-if, on the other hand, actually removes the element from the DOM when the condition is false and only adds the element back in once the condition turns true. Ng-show leaves everything in the DOM alive, and simply hidden from view. This means that all of the watch expressions are still there even though the user doesn't see the view at all.     

The knee jerk reaction might be to avoid replacing the whole tasks list but instead update in place old existing tasks.


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

### Basic Filter   
* currency, number, date, lowercase, uppercase   
* Use the | and : characters   

```   
// index.html     
{{item.name | uppercase}}   
{{item.shortname | lowercase }}    
```    

### Array management filters    
* limitTo:qty:start   
* filter:keyword   
* orderBy: key:reverse     

```   
// index.html    
<li ng-repeat="item in artists | limitTo:4:1">   
<li ng-repeat="item in artists | filter: 'query' | orderBy: 'name'">  
<li ng-repeat="item in artists | orderBy:'name':'reverse'">        
```    

### Routing and deep linking   




