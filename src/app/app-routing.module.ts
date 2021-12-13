import { PopupComponent } from './components/popup/popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';

const routes: Routes = [
  {path:'',redirectTo:"zipcode",pathMatch:"full"},
  {path:"zipcode",component:ZipcodeComponent},
  {path:"popup",component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
