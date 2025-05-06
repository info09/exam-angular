import { ApiResult } from './../models/result.model';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryCreate, CategoryDto, CategoryUpdate, Pagination } from '../models';
import { catchError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }

    add(entity: CategoryCreate) {
        return this.http
            .post(`${environment.apiUrl}/api/Categories`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    update(entity: CategoryUpdate) {
        return this.http
            .put(`${environment.apiUrl}/api/Categories`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    delete(id) {
        return this.http
            .delete(`${environment.apiUrl}/api/Categories/${id}`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getById(id: string) {
        return this.http
            .get<ApiResult<CategoryDto>>(`${environment.apiUrl}/api/Categories/${id}`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getAll() {
        return this.http
            .get<ApiResult<CategoryDto[]>>(`${environment.apiUrl}/api/Categories`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getAllPaging(searchKeyword: string, pageIndex: number, pageSize: number) {
        return this.http
            .get<ApiResult<Pagination<CategoryDto>>>(
                `${environment.apiUrl}/api/Categories/paging?searchKeyword=${searchKeyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`,
                { headers: this._sharedHeaders }
            )
            .pipe(catchError(this.handleError));
    }
}
