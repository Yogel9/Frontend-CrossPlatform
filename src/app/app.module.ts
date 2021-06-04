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
import { AuthComponent } from './components/auth/auth.component';
import { UserComponent } from './components/user/user.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';

const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'menu', component: MenuComponent, },
  {path: 'auth', component: AuthComponent, },
  {path: 'user', component: UserComponent, },
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
    FurnituresComponent
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
