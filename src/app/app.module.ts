import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './Navigation/header/header.component';
import { CollectionComponent } from './collection/collection.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AddArmyModalComponent } from './modal/add-army-modal/add-army-modal.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CollectionUnitsComponent } from './collection/collection-units/collection-units.component';
import { BtnCellRendererComponent } from './agGrid-Elements/btn-cell-renderer/btn-cell-renderer.component';
import { CollectionWargearComponent } from './collection/collection-wargear/collection-wargear.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditUnitModalComponent } from './modal/edit-unit-modal/edit-unit-modal.component';
import { CollectionArmiesComponent } from './collection/collection-armies/collection-armies.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { AuthenticationComponent } from './Navigation/authentication/authentication.component';
import { NewUserModalComponent } from './modal/new-user-modal/new-user-modal.component';

const appRoutes: Routes = [
  {path: '', component: CollectionComponent},
  {path: 'collection-units/:armyID/:factionID', component: CollectionUnitsComponent},
  {path: 'collection-wargear', component: CollectionWargearComponent},
  {path: 'collection-armies/:factionID', component: CollectionArmiesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'auth', component: AuthenticationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    CardComponent,
    AddArmyModalComponent,
    CollectionUnitsComponent,
    BtnCellRendererComponent,
    CollectionWargearComponent,
    EditUnitModalComponent,
    CollectionArmiesComponent,
    ConfirmModalComponent,
    GalleryComponent,
    AuthenticationComponent,
    NewUserModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([BtnCellRendererComponent]),
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [AddArmyModalComponent, EditUnitModalComponent, ConfirmModalComponent]
})
export class AppModule { }
