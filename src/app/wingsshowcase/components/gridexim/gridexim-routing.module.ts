import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {Gridexim} from './gridexim';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: Gridexim}
		])
	],
	exports: [
		RouterModule
	]
})
export class GrideximRoutingModule {}
