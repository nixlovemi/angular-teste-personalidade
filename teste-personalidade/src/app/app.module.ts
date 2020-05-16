import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PgStartComponent } from './pg-start/pg-start.component';
import { PgIndexComponent } from './pg-index/pg-index.component';
import { PgTestComponent } from './pg-test/pg-test.component';
import { PgFinishComponent } from './pg-finish/pg-finish.component';

@NgModule({
  declarations: [
    AppComponent,
    PgStartComponent,
    PgIndexComponent,
    PgTestComponent,
    PgFinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
