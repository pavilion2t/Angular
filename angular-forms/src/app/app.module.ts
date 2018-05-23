import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { StarComponent } from './star/star.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    StarComponent,
    SearchComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
