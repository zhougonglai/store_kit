import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

const routes: Routes = [
	{
		path: environment.baseUrl,
		loadChildren: () =>
			import('./tabs/tabs.module').then(m => m.TabsPageModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
