package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Event;
import com.pjp.bandmanapi.repository.EventRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRespository eventRespository;

	@Override
	public Event create(Event entity) {
		return eventRespository.save(entity);
	}

	@Override
	public Event update(Event entity) {
		return eventRespository.save(entity);
	}

	@Override
	public List<Event> findAll() {
		return (List<Event>) eventRespository.findAll();
	}

	@Override
	public Event findById(Long id) {
		return eventRespository.findById(id).get();
	}

	@Override
	public List<Event> findByBandId(Long bandId) {
		return eventRespository.findByBand_Id(bandId);
	}

	@Override
	public void delete(Long id) {
		Event event = findById(id);
		eventRespository.delete(event);
	}
}
