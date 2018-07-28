import { Component } from '@angular/core';

// 装饰器 模板 控制器
// 所有组件都使用装饰器来注入元数据，把他们加到AppComponent类
@Component({
  selector: 'app-root', // 可以通过这个html标签来调用组件内容
  templateUrl: './app.component.html', // 组件内容，模板
  styleUrls: ['./app.component.css']  
})
export class AppComponent {  // 定义控制器，页面的逻辑
  title = 'Judy';
}

// 输入属性@Inputs() 提供器providers 生命周期钩子 
