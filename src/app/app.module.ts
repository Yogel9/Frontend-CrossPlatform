import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'menu', component: MenuComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: 'all-order', component: AllOrdersComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
