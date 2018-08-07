package com.pjp.bandmanapi.controller;

import com.pjp.bandmanapi.model.Event;
import com.pjp.bandmanapi.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

	@Autowired
	private EventService eventService;

	@RequestMapping(value = "/events", method = RequestMethod.GET)
	public List<Event> getAllEvents() {
		return eventService.findAll();
	}

	@RequestMapping(value = "band/events/{id}", method = RequestMethod.GET)
	public List<Event> getEventsByBandId(@PathVariable("id") Long id) {
		return eventService.findByBandId(id);
	}

	@RequestMapping(value = "/events/{id}", method = RequestMethod.GET)
	public Event getEventById(@PathVariable("id") Long id) {
		return eventService.findById(id);
	}

	@RequestMapping(value = "/events", method = RequestMethod.POST)
	public Event createEvent(@RequestBody Event event) {
		return eventService.create(event);
	}

	@RequestMapping(value = "/events", method = RequestMethod.PUT)
	public Event getAllEvents(@RequestBody Event event) {
		return eventService.update(event);
	}

	@RequestMapping(value = "/events/{id}", method = RequestMethod.DELETE)
	public void deleteEvent(@PathVariable("id") Long id) {
		eventService.delete(id);
	}

}
