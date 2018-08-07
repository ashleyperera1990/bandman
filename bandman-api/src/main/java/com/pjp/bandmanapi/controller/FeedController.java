package com.pjp.bandmanapi.controller;

import com.pjp.bandmanapi.model.Feed;
import com.pjp.bandmanapi.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedController {

	@Autowired
	private FeedService feedService;

	@RequestMapping(value = "/feed", method = RequestMethod.POST)
	public Feed createFeed(@RequestBody Feed feed) {
		return feedService.create(feed);
	}

	@RequestMapping(value = "/feed", method = RequestMethod.PUT)
	public Feed updateFeed(@RequestBody Feed feed) {
		return feedService.update(feed);
	}

	@RequestMapping(value = "/feed", method = RequestMethod.GET)
	public List<Feed> getFeed() {
		return feedService.findAll();
	}

	@RequestMapping(value = "/feed/{id}", method = RequestMethod.GET)
	public Feed getFeed(@PathVariable("id") Long id) {
		return feedService.findById(id);
	}

	@RequestMapping(value = "band/feed/{id}", method = RequestMethod.GET)
	public List<Feed> getBandFeeds(@PathVariable("id") Long bandId) {
		return feedService.findByBandId(bandId);
	}

	@RequestMapping(value = "/feed", method = RequestMethod.DELETE)
	public void deleteFeed() {
		feedService.delete(1L);
	}

}
