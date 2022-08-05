import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './access.guard';
import { FullDetailsComponent } from './full-details/full-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path:'', component:HomeComponent},
{path:'show/:id',component:FullDetailsComponent,children:[
{path:'login', component:LoginComponent}

]},
{path:'about', component:AboutComponent},
{path:'login',component:LoginComponent, canActivate:[AccessGuard]},
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'lazy-loading', loadChildren:()=>import('./lazy-loading/lazy-loading.module').then(m=>m.LazyLoadingModule)},
{path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
