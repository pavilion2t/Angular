# Angular5

全局安装--新建项目--进入项目--服务端运行--打开http://localhost:4200/

```
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open     

update: Cannot find module '@angular-devkit/core'

https://stackoverflow.com/questions/48394003/cannot-find-module-angular-devkit-core
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
```
README.md 里面包含命令行语句的基本用法 https://github.com/angular/angular-cli  
```
src文件夹为源文件： 
```
app/app.component.{ts,html,css,spec.ts}  超文本标记语言模板, 样式, 和单元测试
app/app.module.ts  根模块，告诉angular怎么组织应用。现在它只定义AppComponent，马上会增加更多。    
assets/*   这个文件夹下可以放图片等任何东西，在构建应用时，它们全都会拷贝到发布包中。   
environments/*   包括为各个目标环境准备的文件，它们导出了一些应用中要用到的配置变量  
favicon.ico  小图标    
index.html     
main.ts  主入口   
polyfills.ts   不同的浏览器对Web标准的支持程度也不同。 填充库能帮我们把这些不同点进行标准化。
styles.css    全局样式  
test.ts    单元测试   
tsconfig.{app|spec}.json    TypeScript编译器的配置文件。
```     

src/文件夹是项目的根文件夹之一。  
其它文件是用来帮助你构建、测试、维护、文档化和发布应用的。   
它们放在根目录下，和src/平级。     
```   
e2e/  端到端测试，和应用是相互独立的，它只适用于测试你的应用而已，它拥有自己的tsconfig.json。  
node_modules/   Node.js创建了这个文件夹，并且把package.json中列举的所有第三方模块都放在其中。  
.angular-cli.json   Angular CLI的配置文件        
```    
     
     
使用CLI新建文件夹
```
ng generate component heroes
  create src/app/heroes/heroes.component.css (0 bytes)
  create src/app/heroes/heroes.component.html (25 bytes)
  create src/app/heroes/heroes.component.spec.ts (628 bytes)
  create src/app/heroes/heroes.component.ts (269 bytes)
  update src/app/app.module.ts (398 bytes)   
```    
* UppercasePipe 可以对字母格式化--全部大写   
* 数据双向绑定使用 ngModel directive    
* 在 app.module.ts 里导入 FormsModule，理解声明的重要性    
```   
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
```       
#### HttpClient





