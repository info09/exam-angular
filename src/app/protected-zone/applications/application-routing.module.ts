import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsComponent } from './exam/exam.component';

const routes: Routes = [
    {
        path: '',
        component: ExamsComponent
    },
    {
        path: 'exam',
        component: ExamsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule {}
