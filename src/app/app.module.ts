import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { WarningComponent } from './warning/warning.component';



import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';


export const appRouters: Routes = [
  { path: '', component: OneComponent },
  { path: 'O projekcie', component: OneComponent },
  { path: 'Wykres 3D', component: TwoComponent },
  // {
  //   path: 'three', component: ThreeComponent,
  //   data: [{ version: '1.1.8' }]
  // },
  // { path: 'four/:idOffer', component: FourComponent },
  { path: '**', component: WarningComponent },


]









@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouters),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
