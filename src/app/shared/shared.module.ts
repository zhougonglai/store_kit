import { NgModule } from '@angular/core';

import { BouncingLoaderComponent } from '@components/bouncing-loader/bouncing-loader.component';
import { ScrollViewComponent } from '@components/scroll-view/scroll-view.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';

const Components = [
	ScrollViewComponent,
	BouncingLoaderComponent,
	SpinnerComponent,
];

@NgModule({
	declarations: [...Components],
	exports: [...Components],
})
export class SharedModule {}
