import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Roteador...bip
// Rotas que terei de fazer mais tarde
/*const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
		canLoad: [AuthGuard]
	},
	{
		path: 'configuracoes',
		loadChildren: () => import('./configuracoes/configuracoes.module').then(m => m.ConfiguracoesModule),
		canLoad: [AuthGuard]
	},
	{
		path: 'suporte',
		loadChildren: () => import('./support/support.module').then(m => m.SupportModule),
		canLoad: [AuthGuard]
	},
	{
		path: 'comercial',
		loadChildren: () => import('./comercial/comercial.module').then(m => m.ComercialModule),
		canLoad: [AuthGuard]
	},
	{
		path: 'servicos',
		loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule),
		canLoad: [AuthGuard]
	},
	{
		path: '**',
		component: NotFoundComponent,
		canActivate: [AuthGuard]
	}
];*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
