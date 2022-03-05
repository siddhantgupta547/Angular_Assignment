import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { BannerComponent } from './components/banner/banner.component';
import { CourseComponentComponent } from './components/course-component/course-component.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { DataService } from './services/dataService';
import { SideBarCartComponent } from './components/side-bar-cart/side-bar-cart.component';

const routes = [
  { path: 'courses', component: AppComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    BannerComponent,
    CourseComponentComponent,
    CourseCardComponent,
    SideBarCartComponent,
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
