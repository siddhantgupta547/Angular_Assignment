import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CourseComponentComponent } from './components/course-component/course-component.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { DataService } from './services/dataService';
import { SideBarCartComponent } from './components/side-bar-cart/side-bar-cart.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { CartComponent } from './components/cart/cart.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes = [
  { path: 'courses', component: CourseComponentComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CourseComponentComponent,
    CourseCardComponent,
    SideBarCartComponent,
    ProfileComponentComponent,
    CartComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
