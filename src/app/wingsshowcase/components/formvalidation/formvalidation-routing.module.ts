import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormValidation} from './formvalidation';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: FormValidation}
		])
	],
	exports: [
		RouterModule
	]
})
export class FormValidationRoutingModule {}
