import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productCardComponent } from './project-card/productCard.component';
import { LoginComponent } from './login/login.component';

// Roteador...bip
// Rotas que terei de fazer mais tarde, funcionar no caso

const routes: Routes = [
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'login', component:LoginComponent
	},
	{
		path: 'products/', component:productCardComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
