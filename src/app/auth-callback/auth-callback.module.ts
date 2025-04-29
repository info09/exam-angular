import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthCallbackRoutingModule } from './auth-callback-routing.module';
import { AuthCallbackComponent } from './auth-callback.component';

@NgModule({
    declarations: [AuthCallbackComponent],
    imports: [CommonModule, AuthCallbackRoutingModule]
})
export class AuthCallbackModule {}
