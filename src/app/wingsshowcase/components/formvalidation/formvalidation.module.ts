import { FormValidationRoutingModule } from './formvalidation-routing.module';
import { FormValidation as FormValidationComponent } from './formvalidation';

import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';

import {GrowlModule} from '../../../components/growl/growl';
import {PanelModule} from '../../../components/panel/panel';
import {DropdownModule} from '../../../components/dropdown/dropdown';
import {InputTextModule} from '../../../components/inputtext/inputtext';
import {InputTextareaModule} from '../../../components/inputtextarea/inputtextarea';
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';


@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    FormValidationRoutingModule,
    CommonModule
  ]
})
export class FormValidationModule { }
