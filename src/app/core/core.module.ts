import { NgModule } from '@angular/core';

// import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@NgModule({
  providers: [ConfigService]
  // providers: [AuthService, ConfigService]
})
export class CoreModule {
}
