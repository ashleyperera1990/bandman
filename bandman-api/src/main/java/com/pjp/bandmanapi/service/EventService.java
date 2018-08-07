package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Event;
import com.pjp.bandmanapi.model.Feed;

import java.util.List;

public interface EventService extends BaseService<Event> {

	List<Event> findByBandId(Long bandId);
}
