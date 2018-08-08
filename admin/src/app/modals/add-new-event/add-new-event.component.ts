import {Component, OnInit, Output} from '@angular/core';
import {Band} from "../../models/band.model";
import {NgbActiveModal, NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {EventService} from "../../services/event.service";
import {BandService} from "../../services/band.service";
import {DateUtil} from "../../utils/date.util";
import {Event} from "../../models/event.model";
import {DatePickerFormatter} from "../../utils/date-picker.formatter";

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.scss']
})
export class AddNewEventComponent implements OnInit {

    band: Band;
    event: Event;
    date: NgbDateStruct;
    time: NgbTimeStruct;


    constructor(private modal: NgbActiveModal, private eventService: EventService, private bandService: BandService,
                private dateFormatter: DatePickerFormatter) {
    }

    ngOnInit() {
        this.event = new Event();
        this.band = this.bandService.getCurrentBand();
    }

    cancel() {
        this.modal.close();
    }

    save() {
        let newDate = this.dateFormatter.toDate(this.date);


        if (!this.event.band) {
            this.event.band = this.band;
        }
        this.event.dateTime = newDate;

        this.eventService.create(this.event).subscribe(() => {
            this.modal.close();
        });
    }
}
