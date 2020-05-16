import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PgStartComponent } from './pg-start/pg-start.component';
import { PgIndexComponent } from './pg-index/pg-index.component';
import { PgTestComponent } from './pg-test/pg-test.component';
import { PgFinishComponent } from './pg-finish/pg-finish.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: PgIndexComponent },
    { path: 'start', component: PgStartComponent },
    { path: 'test/:questionIdx', component: PgTestComponent },
    { path: 'finish/:A/:C/:I/:O', component: PgFinishComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }