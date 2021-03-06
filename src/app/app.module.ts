import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { QuestionsComponent } from './Home/questions/questions.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './Home/result/result.component';
import { HomecontentComponent } from './Home/homecontent/homecontent.component';
import { UserComponent } from './Home/user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { DoctorHomeComponent } from './Doctor/doctor-home/doctor-home.component';
import { DoctorLoginComponent } from './Doctor/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './Doctor/doctor-register/doctor-register.component';
import { DoctorPatientsComponent } from './Doctor/doctor-patients/doctor-patients.component';
import { DoctorsComponent } from './Home/doctors/doctors.component';
import { AboutComponent } from './Home/about/about.component';
import { AlertComponent } from './components/alert/alert.component';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    ResultComponent,
    HomecontentComponent,
    UserComponent,
    DoctorHomeComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorPatientsComponent,
    DoctorsComponent,
    AboutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    HotToastModule.forRoot()
  ],
  providers: [AuthGuard,AuthService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
