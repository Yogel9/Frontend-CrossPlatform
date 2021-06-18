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
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { UserComponent } from './components/user/user.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { OrderComponent } from './components/order/order.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddorderComponent } from './components/addorder/addorder.component';
const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'auth', component: AuthComponent, },
  {path: 'user', component: UserComponent, },
  {path: 'furn', component: FurnituresComponent, },
  {path: 'order', component: OrderComponent, },
  {path: 'AddOrder', component: AddorderComponent, },
  {path: '**', component: HomeComponent, }, /*redirectTo: '',*/
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    UserComponent,
    FurnituresComponent,
    OrderComponent,
    AddorderComponent,
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
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
