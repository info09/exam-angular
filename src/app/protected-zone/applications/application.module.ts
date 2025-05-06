import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ValidationMessageModule } from '../../shared/modules/validation-message/validation-message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '../../shared/services/notification.service';
import { ApplicationRoutingModule } from './application-routing.module';
import { ExamsComponent } from './exam/exam.component';
import { CategoryComponent } from './category/category.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';

@NgModule({
    declarations: [ExamsComponent, CategoryComponent, CategoryDetailComponent],
    imports: [
        ApplicationRoutingModule,
        ValidationMessageModule,
        CommonModule,
        PanelModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        BlockUIModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        ValidationMessageModule,
        KeyFilterModule,
        CalendarModule,
        CheckboxModule,
        RippleModule,
        TooltipModule,
        ModalModule.forRoot()
    ],
    providers: [NotificationService, BsModalService]
})
export class ApplicationModule {}
