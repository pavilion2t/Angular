# Angular

全局安装--新建项目--进入项目--服务端运行--打开http://localhost:4200/

```
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open
```

根目录 ./src/app/app.component.ts 在这里把title改为 我的第一个Angular App! 浏览器会实时更新。
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '我的第一个Angular App!';
}
```

然后更改CSS文件 src/app/app.component.css
```
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
```

都可以看到效果~~  
What's next? https://angular.io/tutorial

分析文件结构：   
README.md 里面包含命令行语句的基本用法 https://github.com/angular/angular-cli    
src文件夹为源文件：  
app/app.component.{ts,html,css,spec.ts}  超文本标记语言模板, 样式, 和单元测试
app/app.module.ts  根模块，告诉angular怎么组织应用。现在它只定义AppComponent，马上会增加更多。    
assets/*   构建应用的时候可以批量复制的文件夹 
