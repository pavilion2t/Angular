import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //声明模块中有什么，只能声明组件指令和管道
    AppComponent
  ],
  imports: [//
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //只能声明服务，依赖注入
  bootstrap: [AppComponent] //声明模块的主组件
})
export class AppModule { }

//模块，一个带着装饰器的typescript类