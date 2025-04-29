import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: AuthCallbackComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthCallbackRoutingModule {}
