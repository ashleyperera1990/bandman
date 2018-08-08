import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../routes/dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {BandDetailComponent} from "../../routes/band/band-detail/band-detail.component";
import {NewsFeedComponent} from "../../routes/news-feed/news-feed.component";
import {YoutubePlayerModule} from "ngx-youtube-player";
import {EventsListComponent} from "../../routes/events/events-list/events-list.component";
import {EventDetailComponent} from "../../routes/events/event-detail/event-detail.component";
import {AddNewFeedComponent} from "../../modals/add-new-feed/add-new-feed.component";
import {AddNewEventComponent} from "../../modals/add-new-event/add-new-event.component";
import {BandMemberDetailComponent} from "../../routes/band/band-member-detail/band-member-detail.component";
import {HomeComponent} from "../../routes/home/home.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ChartsModule,
        NgbModule,
        ToastrModule.forRoot(),
        YoutubePlayerModule
    ],
    declarations: [
        DashboardComponent,
        BandDetailComponent,
        NewsFeedComponent,
        EventsListComponent,
        EventDetailComponent,
        AddNewFeedComponent,
        AddNewEventComponent,
        BandMemberDetailComponent,
        HomeComponent
    ],
    providers: [
        NewsFeedComponent
    ],
    entryComponents: [
        AddNewFeedComponent,
        AddNewEventComponent
    ]
})

export class AdminLayoutModule {
}
