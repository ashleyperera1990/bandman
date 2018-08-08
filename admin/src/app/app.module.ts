import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {forwardRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from "@angular/common/http";
import {BandService} from "./services/band.service";
import {FeedService} from "./services/feed.service";
import {EventService} from "./services/event.service";
import {DateUtil} from "./utils/date.util";
import {DatePickerFormatter} from "./utils/date-picker.formatter";
import {UrlUtil} from "./utils/url.util";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./utils/auth-guard.util";
import {LoginComponent} from "./modals/login/login.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        LoginComponent
    ],
    providers: [
        BandService,
        FeedService,
        EventService,
        DateUtil,
        DatePickerFormatter,
        UrlUtil,
        UserService,
        AuthGuard
    ],
    entryComponents: [
        LoginComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
