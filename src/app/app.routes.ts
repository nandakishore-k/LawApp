import { Routes } from '@angular/router';
import { SinglecaseComponent } from './singlecase/singlecase.component';
import { MaininterComponent } from './maininter/maininter.component';
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'maininter',component: MaininterComponent},
  {path: 'singlecase',component: SinglecaseComponent},
  {path: 'pending',component: PendingComponent},
];
