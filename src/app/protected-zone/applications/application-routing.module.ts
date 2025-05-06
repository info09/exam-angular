import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsComponent } from './exam/exam.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
    {
        path: '',
        component: ExamsComponent
    },
    {
        path: 'exam',
        component: ExamsComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule {}
