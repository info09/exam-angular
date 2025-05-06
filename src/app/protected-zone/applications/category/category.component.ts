import { NotificationService } from './../../../shared/services/notification.service';
import { ApiResult } from './../../../shared/models/result.model';
import { CategoryService } from './../../../shared/services/categories.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryDto, Pagination } from './../../../shared/models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, takeUntil } from 'rxjs';
import { MessageConstants } from '../constants';

@Component({
    selector: 'app-category',
    styleUrls: ['./category.component.css'],
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.loadData();
    }
    private subscription = new Subscription();
    // Default
    public bsModalRef: BsModalRef;
    public blockedPanel = false;

    public pageIndex = 1;
    public pageSize = 10;
    public pageDisplay = 10;
    public totalRecords: number;
    public keyword = '';

    public items: any[];
    public selectedItems = [];

    constructor(
        private categoryService: CategoryService,
        private modalService: BsModalService,
        private notificationService: NotificationService
    ) {}

    loadData() {
        this.blockedPanel = true;
        this.categoryService.getAllPaging(this.keyword, this.pageIndex, this.pageSize).subscribe(
            (response: ApiResult<Pagination<CategoryDto>>) => {
                this.items = response.resultObj.items;
                this.totalRecords = response.resultObj.metaData.totalCount;
                this.blockedPanel = false;
            },
            (error) => {
                setTimeout(() => {
                    this.blockedPanel = false;
                }, 1000);
            }
        );
        this.blockedPanel = false;
    }

    pageChanged(event: any) {}
    showAddModal() {}

    deleteItems() {
        if (this.selectedItems.length === 0) {
            this.notificationService.showError(MessageConstants.NOT_CHOOSE_ANY_RECORD);
            return;
        }
        const id = this.selectedItems[0].id;

        this.notificationService.showConfirmation(MessageConstants.CONFIRM_DELETE_MSG, () =>
            this.deleteItemsConfirm(id)
        );
    }

    deleteItemsConfirm(ids: any[]) {
        this.blockedPanel = true;
        this.categoryService.delete(ids).subscribe(
            () => {
                this.notificationService.showSuccess(MessageConstants.DELETED_OK_MSG);
                this.loadData();
                this.selectedItems = [];
                setTimeout(() => {
                    this.blockedPanel = false;
                }, 1000);
            },
            (error) => {
                this.notificationService.showError(error);
                setTimeout(() => {
                    this.blockedPanel = false;
                }, 1000);
            }
        );
    }

    showEditModal() {}
}
