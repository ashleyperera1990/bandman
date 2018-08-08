import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FeedService} from "../../services/feed.service";
import {BandService} from "../../services/band.service";
import {UrlUtil} from "../../utils/url.util";
import {Feed} from "../../models/feed.model";

@Component({
    selector: 'app-add-new-feed',
    templateUrl: './add-new-feed.component.html',
    styleUrls: ['./add-new-feed.component.scss']
})
export class AddNewFeedComponent implements OnInit {

    feed;
    youtubeUrl: string;

    constructor(private modal: NgbActiveModal, private feedService: FeedService, private bandService: BandService,
                private urlUtil: UrlUtil) {
    }

    ngOnInit() {
        this.feed = new Feed();
        this.feed.band = this.bandService.getBand();
    }

    cancel() {
        this.modal.close();
    }

    save() {
        if (this.youtubeUrl) {
            this.feed.youtubeVideoId = this.urlUtil.getYouTubeVideoIdFromUrl(this.youtubeUrl);
        }
        this.feed.dateTimePosted = new Date().toISOString();
        this.feedService.create(this.feed).subscribe(() => {
            this.modal.close();
        })
    }

}
