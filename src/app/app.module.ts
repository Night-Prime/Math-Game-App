import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquationFormComponent } from './equation-form/equation-form.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationFormComponent,
    AnswerHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
