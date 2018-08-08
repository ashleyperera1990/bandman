import { Component, OnInit } from '@angular/core';
import {Feed} from "../../models/feed.model";
import {FeedService} from "../../services/feed.service";
import {BandService} from "../../services/band.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddNewFeedComponent} from "../../modals/add-new-feed/add-new-feed.component";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

    feeds: Feed[];
    linkId;

    constructor(private feedService: FeedService, private bandService: BandService, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.getFeeds();
    }

    getFeeds() {
        let bandId = this.bandService.getCurrentBand().id;
        this.feedService.findByBandId(bandId).subscribe((feeds) => {
            this.feeds = feeds;
        })
    }

    openModal() {
        this.modalService.open(AddNewFeedComponent);
    }

}
