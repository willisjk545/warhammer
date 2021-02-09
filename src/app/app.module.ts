import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  {path: 'collection', component: CollectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // Needed for http Requests
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
