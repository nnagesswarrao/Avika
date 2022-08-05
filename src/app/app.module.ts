import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { AccessGuard } from './access.guard';
//import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
//import{EmployeeService} from './employee.service';
import { ShowDataComponent } from './show-data/show-data.component';
import { PostComponent } from './Posts/post/post.component'
import { PostService } from './Posts/post.service';
import{HttpClientModule} from '@angular/common/http';
import { ObservaleComponent } from './observale/observale.component';
import { FormsModule } from '@angular/forms';
import { FullDetailsComponent } from './full-details/full-details.component';
//import { PipesComponent } from './Observale/pipes/pipes.component';
//import { OperatorsComponent } from './Observale/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavComponent,
    TeacherComponent,
    StudentComponent,
    ShowDataComponent,
    PostComponent,
    ObservaleComponent,
    FullDetailsComponent,
    //PipesComponent,
    //OperatorsComponent,
    //LazyDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [AccessGuard,PostService],//, EmployeeService],
 // providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
