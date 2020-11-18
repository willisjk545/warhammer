import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'collection', component: CollectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
