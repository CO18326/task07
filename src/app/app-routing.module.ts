import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';


const routes: Routes = [
  {path:'',component:DigitalClockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
