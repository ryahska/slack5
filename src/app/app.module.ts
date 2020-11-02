import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

