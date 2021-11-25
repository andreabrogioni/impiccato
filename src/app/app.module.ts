import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ControlloParolaComponent } from './controllo-parola/controllo-parola.component';
import { ErroriComponent } from './errori/errori.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ControlloParolaComponent,
    ErroriComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
