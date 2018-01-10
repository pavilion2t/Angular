# Angular

全局安装--新建项目--进入项目--服务端运行--打开http://localhost:4200/

```
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open
```

根目录 ./src/app/app.component.ts 在这里把title改为 我的第一个Angular App!
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
