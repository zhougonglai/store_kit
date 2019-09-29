import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'home',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../home/home.module').then(m => m.HomePageModule),
					},
				],
			},
			{
				path: 'search',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../search/search.module').then(m => m.SearchPageModule),
					},
				],
			},
			{
				path: 'cart',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../cart/cart.module').then(m => m.CartPageModule),
					},
				],
			},
			{
				path: 'person',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../person/person.module').then(m => m.PersonPageModule),
					},
				],
			},
			{
				path: '',
				redirectTo: '/tabs/home',
				pathMatch: 'full',
			},
		],
	},
	{
		path: '',
		redirectTo: '/tabs/home',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsPageRoutingModule {}
