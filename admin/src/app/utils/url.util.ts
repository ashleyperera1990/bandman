import {Injectable} from "@angular/core";
import {Feed} from "../models/feed.model";

@Injectable()
export class UrlUtil {

    getYoutubeEmbedUrlFromWatchLink(oldUrl: string) {
        let newUrl = oldUrl.replace('watch', 'embed');
        return newUrl;
    }

    getYouTubeVideoIdFromUrl(url) {
        let linkId = url.split('v=')[1];
        return linkId;


    }
}