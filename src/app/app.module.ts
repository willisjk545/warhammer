import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AddArmyModalComponent } from './modal/add-army-modal/add-army-modal.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CollectionUnitsComponent } from './collection/collection-units/collection-units.component';

const appRoutes: Routes = [
  {path: 'collection', component: CollectionComponent},
  {path: 'collection-units/:id', component: CollectionUnitsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    CardComponent,
    AddArmyModalComponent,
    CollectionUnitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // Needed for http Requests
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [AddArmyModalComponent]
})
export class AppModule { }
