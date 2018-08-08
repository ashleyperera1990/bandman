import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../services/event.service";
import {DateUtil} from "../../../utils/date.util";
import {DatePickerFormatter} from "../../../utils/date-picker.formatter";
import {Event} from "../../../models/event.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

    event: Event;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    readOnly = true;

    constructor(private route: ActivatedRoute, private eventService: EventService, private dateFormatter: DatePickerFormatter,
                private dateUtil: DateUtil) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params.id;
            this.getEvent(id);
        });

    }

    getEvent(id) {
        this.eventService.findById(id).subscribe(event => {
            this.event = event;
        })
    }

    getDateAndTimeFromDateTime() {
        this.date = this.dateFormatter.parse(new Date(this.event.dateTime).toLocaleDateString());
        this.time = this.dateUtil.getTimeStructFromDate(this.event.dateTime);
    }

    cancel() {

    }

    clearChanges() {
        this.getEvent(this.event.id);
        this.toggleEdit();
    }

    save() {
        this.event.dateTime = this.dateFormatter.toDateTime(this.date, this.time);
        this.eventService.create(this.event).subscribe(() => {
            this.readOnly = true;
            this.ngOnInit();
        })
    }

    toggleEdit() {
        this.readOnly = !this.readOnly;
        this.getDateAndTimeFromDateTime();
    }

}
