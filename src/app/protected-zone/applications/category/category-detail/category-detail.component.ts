import { NotificationService } from './../../../../shared/services/notification.service';
import { CategoryService } from './../../../../shared/services/categories.service';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageConstants } from '../../constants';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
    constructor(
        public bsModalRef: BsModalRef,
        private categoryService: CategoryService,
        private notificationService: NotificationService,
        private fb: FormBuilder
    ) {}

    private subscription = new Subscription();
    public entityForm: FormGroup;
    public dialogTitle: string;
    private savedEvent: EventEmitter<any> = new EventEmitter();
    public entityId: string;
    public btnDisabled = false;

    public blockedPanel = false;

    // Validate
    validation_messages = {
        name: [
            { type: 'required', message: 'Trường này bắt buộc' },
            { type: 'maxlength', message: 'Bạn không được nhập quá 25 kí tự' }
        ],
        urlPath: [
            { type: 'required', message: 'Trường này bắt buộc' },
            { type: 'maxlength', message: 'Bạn không được nhập quá 30 kí tự' }
        ]
    };

    ngOnInit() {
        this.entityForm = this.fb.group({
            id: new FormControl(''),
            name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
            urlPath: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)]))
        });
        if (this.entityId) {
            this.dialogTitle = 'Cập nhật';
            this.loadFormDetails(this.entityId);
            this.entityForm.controls['id'].disable({ onlySelf: true });
        } else {
            this.dialogTitle = 'Thêm mới';
            this.entityForm.controls['id'].enable({ onlySelf: true });
        }
    }

    private loadFormDetails(id: any) {
        this.blockedPanel = true;
        this.categoryService.getById(id).subscribe(
            (response: any) => {
                this.entityForm.setValue({
                    name: response.resultObj.name,
                    urlPath: response.resultObj.urlPath,
                    id: response.resultObj.id
                });
                setTimeout(() => {
                    this.blockedPanel = false;
                    this.btnDisabled = false;
                }, 1000);
            },
            (error) => {
                setTimeout(() => {
                    this.blockedPanel = false;
                    this.btnDisabled = false;
                }, 1000);
            }
        );
    }
    public saveChange() {
        this.btnDisabled = true;
        this.blockedPanel = true;
        if (this.entityId) {
            this.subscription.add(
                this.categoryService.update(this.entityForm.getRawValue()).subscribe(
                    () => {
                        this.savedEvent.emit(this.entityForm.value);
                        this.notificationService.showSuccess(MessageConstants.UPDATED_OK_MSG);
                        this.btnDisabled = false;
                        setTimeout(() => {
                            this.blockedPanel = false;
                            this.btnDisabled = false;
                        }, 1000);
                    },
                    (error) => {
                        setTimeout(() => {
                            this.blockedPanel = false;
                            this.btnDisabled = false;
                        }, 1000);
                    }
                )
            );
        } else {
            this.subscription.add(
                this.categoryService.add(this.entityForm.getRawValue()).subscribe(
                    () => {
                        this.savedEvent.emit(this.entityForm.value);
                        this.notificationService.showSuccess(MessageConstants.CREATED_OK_MSG);
                        this.btnDisabled = false;
                        setTimeout(() => {
                            this.blockedPanel = false;
                            this.btnDisabled = false;
                        }, 1000);
                    },
                    (error) => {
                        setTimeout(() => {
                            this.blockedPanel = false;
                            this.btnDisabled = false;
                        }, 1000);
                    }
                )
            );
        }
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
