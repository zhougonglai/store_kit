import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';

@NgModule({
	declarations: [],
	imports: [
		// angular
		CommonModule,
		HttpClientModule,

		// ngrx
		StoreModule.forRoot(reducers, { metaReducers }),
		environment.production
			? []
			: StoreDevtoolsModule.instrument({
					name: 'do new',
			  }),
	],
	exports: [],
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule,
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import only in AppModule');
		}
	}
}
