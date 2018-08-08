import { Component, OnInit } from '@angular/core';
import {Event} from "../../../models/event.model";
import {BandService} from "../../../services/band.service";
import {EventService} from "../../../services/event.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddNewFeedComponent} from "../../../modals/add-new-feed/add-new-feed.component";
import {AddNewEventComponent} from "../../../modals/add-new-event/add-new-event.component";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: Event[];

    constructor(private bandService: BandService, private eventService: EventService, private router: Router,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        this.getAllEventsForBand();
    }

    getAllEventsForBand() {
        let bandId = this.bandService.getCurrentBand().id;
        this.eventService.findByBandId(bandId).subscribe((events) => {
            this.events = events;
        })
    }

    viewEvent(event) {
        this.router.navigateByUrl('event/' + event.id);
    }

    openModal() {
        this.modalService.open(AddNewEventComponent, {size: 'lg'});
    }

}
