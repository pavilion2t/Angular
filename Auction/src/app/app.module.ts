import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [ 
    NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent,
    AppComponent
  ], //声明模块中有什么，只能声组件指令和管道
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //只能声明服务，依赖注入
  bootstrap: [AppComponent] //声明模块的主组件
})
export class AppModule { }

//模块，一个带着装饰器的typescript类