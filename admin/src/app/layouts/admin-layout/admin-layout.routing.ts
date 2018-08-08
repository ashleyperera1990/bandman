import { Routes } from '@angular/router';

import { DashboardComponent } from '../../routes/dashboard/dashboard.component';
import {BandDetailComponent} from "../../routes/band/band-detail/band-detail.component";
import {NewsFeedComponent} from "../../routes/news-feed/news-feed.component";
import {EventsListComponent} from "../../routes/events/events-list/events-list.component";
import {BandMemberDetailComponent} from "../../routes/band/band-member-detail/band-member-detail.component";
import {AuthGuard} from "../../utils/auth-guard.util";
import {HomeComponent} from "../../routes/home/home.component";
import {EventDetailComponent} from "../../routes/events/event-detail/event-detail.component";

export const AdminLayoutRoutes: Routes = [
    { path: '',        component: HomeComponent },
    { path: 'home',        component: HomeComponent },

    { path: 'dashboard',        component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'band-details',     component: BandDetailComponent, canActivate: [AuthGuard]},
    { path: 'band-member/:id',  component: BandMemberDetailComponent, canActivate: [AuthGuard]},
    { path: 'news-feed',        component: NewsFeedComponent, canActivate: [AuthGuard] },
    { path: 'events',           component: EventsListComponent, canActivate: [AuthGuard] },
    { path: 'event/:id',           component: EventDetailComponent, canActivate: [AuthGuard] },
];
