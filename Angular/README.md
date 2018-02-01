AngularJs为第一版。
运行以下命令以克隆GitHub上的 angular-phonecat repository：
```
git clone --depth=14 https://github.com/angular/angular-phonecat.git
```
该`--depth=14`的选项仅仅是告诉Git只拉下来最后的14次提交。这样使下载更小更快。  
中文版14 后续没有更新，执行 git checkout -f step-0 时报错
英文版16 没有问题，执行结果为    
```
Note: checking out 'step-0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at b160462... step-0 Bootstrapping
```

```
cd angular-phonecat  // 把你当前的目录变成angular-phonecat。    
npm install   // 这个命令读取了angular-phonecat的package.json文件，并把以下工具下载到node_modules目录中   
npm start  // 启动一个本地开发Web服务器
npm test  // 启动Karma单元测试运行器
npm run protractor  //运行Protractor端到端（E2E）测试
npm run update-webdriver   //安装Protractor所需要的驱动程序    
```     

打开http://localhost:8000 可以看到效果   

### 0 - Bootstrapping   
```
<!doctype html>

// ng-app指令标记了AngularJS脚本的作用域，在<html>中添加ng-app属性即说明整个<html>都是AngularJS脚本作用域。
//开发者也可以在局部使用ng-app指令，如<div ng-app>，则AngularJS脚本仅在该<div>中运行。
<html lang="en" ng-app>  
  <head>
    <meta charset="utf-8">
    <title>My HTML File</title>
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    
    // 这行代码载入angular.js脚本，当浏览器将整个HTML页面载入完毕后将会执行该angular.js脚本
    // angular.js脚本运行后将会寻找含有ng-app指令的HTML标签，该标签即定义了AngularJS应用的作用域。
    <script src="bower_components/angular/angular.js"></script>
  </head>
  <body>
    // 双大括号绑定的表达式 绑定告诉AngularJS需要运算其中的表达式并将结果插入DOM中
    <p>Nothing here {{'yet' + '!'}}</p>
  </body>
</html>
```
   
### 1 - Static Template
更改一些内容   
```
<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8">
    <title>Google Phone Gallery</title>
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <script src="bower_components/angular/angular.js"></script>
  </head>
  <body>
    <ul>
      <li>
        <span>Nexus S</span>
        <p>
          Fast just got faster with Nexus S.
        </p>
      </li>
      <li>
        <span>Motorola XOOM™ with Wi-Fi</span>
        <p>
          The Next, Next Generation tablet.
        </p>
      </li>
    </ul>
  </body>
</html>
```     

### 2 - AngularJS Templates  
把页面动态化。为应用程序构造代码有很多方式，针对Angular应用，鼓励使用模块-视图-控制器(MVC)设计模式以解耦代码、分离关注点。考虑到这一点，我们使用小的Angular以及JavaScript为我们的应用添加模块、视图和控制器组件。  
在Angular中，视图是模块透过HTML模板的映射。  
我们在body标签上添加一个新指令ng-controller，该指令将一个控制器类附加到视图，这是Angular实现MVC模式的关键地方。
 
```  
<body ng-controller="PhoneListController">

  <ul>
    <li ng-repeat="phone in phones">
      <span>{{phone.name}}</span>
      <p>{{phone.snippet}}</p>
    </li>
  </ul>

</body>   
```  
我们用ngRepeat指令和两个Angular表达式替代硬编码的手机列表。
 
 ```
 // app/app.js  定义 `phonecatApp` 模块
var phonecatApp = angular.module('phonecatApp', []);

// 定义 `PhoneListController` 控制器在 `phonecatApp` 模块上
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
```   

###  3 - Components   
新建一个文件 phone-list.component  
```  
'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
```      

```  
'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', []);
```     

###   4 - Directory and File Organization   
不添加新功能，主要是组织文件格式，最后结果如下：   
```
app/
  phone-list/
    phone-list.component.js
    phone-list.component.spec.js
    phone-list.module.js
    phone-list.template.html
  app.css
  app.module.js
  index.html  
```     

删除 app.js 然后新建 app.module.js   

```
angular.module('phonecatApp', [
  // depends on the `phoneList` module
  'phoneList'
]);
```

### 5 - Filtering Repeaters  
添加全文搜索功能，测试。 对控制器不作修改，修改app/phone-list/phone-list.template.html   
```
<div class="container-fluid">
  <div class="row">
    <div class="col-md-2">
      <!--Sidebar content-->

      Search: <input ng-model="$ctrl.query" />

    </div>
    <div class="col-md-10">
      <!--Body content-->

      <ul class="phones">
        <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
          <span>{{phone.name}}</span>
          <p>{{phone.snippet}}</p>
        </li>
      </ul>

    </div>
  </div>
</div>    
```   
添加了一个标准HTML<input>元素标记，并使用Angular的filter函数来处理repeat指令的输入。    

### 6 - Two-way Data Binding   
数据双向绑定，添加按照日期和按照字母顺序排序。  
```
     <p>
        Sort by:
        <select ng-model="$ctrl.orderProp">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>  
```     

```
      <ul class="phones">
        <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
          <span>{{phone.name}}</span>
          <p>{{phone.snippet}}</p>
        </li>
      </ul>  
```    

### 7 - XHR & Dependency Injection   

```
git checkout -f step-8
Previous HEAD position was 9b1ee8f... step-7 XHR & Dependency Injection
HEAD is now at baf5a9b... step-8 Templating Links & Images  
```   
使用Angular内建的服务 $http从服务器上取得更大的数据集。使用Angular的依赖性注入（DI）来为PhoneListCtrl控制器提供服务。   

```
    controller: ['$http', function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }]
```

