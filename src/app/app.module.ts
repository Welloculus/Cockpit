import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { DevicesComponent } from './components/devices/devices.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ManageAlertsComponent } from './components/manage-alerts/manage-alerts.component';


const appRoutes: Routes = [
{ path:'home', component: HomeComponent, canActivate:[AuthGuard] },
{ path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
{ path:'profile', component: ProfileComponent, canActivate:[AuthGuard] },
{ path:'devices', component: DevicesComponent, canActivate:[AuthGuard] },
{ path:'users', component: UsersComponent, canActivate:[AuthGuard] },
{ path:'reports', component: ReportsComponent, canActivate:[AuthGuard] },
{ path:'facilities', component: FacilitiesComponent, canActivate:[AuthGuard] },
{ path:'manage-alerts', component: ManageAlertsComponent, canActivate:[AuthGuard] },
{ path:'login', component: LoginComponent },
{ path:'', redirectTo: '/dashboard', pathMatch: 'full' },
{ path:'', component: FooterComponent  },
{ path:'**', redirectTo: '/dashboard', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RightSidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DevicesComponent,
    UsersComponent,
    ReportsComponent,
    FacilitiesComponent,
    ManageAlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
