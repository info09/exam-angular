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

@NgModule({
    declarations: [],
    imports: [
        ApplicationRoutingModule,
        CommonModule,
        PanelModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        BlockUIModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        ValidationMessageModule,
        ModalModule.forRoot()
    ],
    providers: [NotificationService, BsModalService]
})
export class ApplicationModule {}
