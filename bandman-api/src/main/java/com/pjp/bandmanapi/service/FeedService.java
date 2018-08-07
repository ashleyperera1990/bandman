package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Feed;

import java.util.List;

public interface FeedService extends BaseService<Feed> {

	List<Feed> findByBandId(Long bandId);
}
