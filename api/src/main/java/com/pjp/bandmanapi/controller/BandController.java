package com.pjp.bandmanapi.controller;

import com.pjp.bandmanapi.model.Band;
import com.pjp.bandmanapi.service.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BandController {

	@Autowired
	private BandService bandService;

	@RequestMapping(value = "/band", method = RequestMethod.POST)
	public Band createBand(@RequestBody Band band) {
		return bandService.create(band);
	}

	@RequestMapping(value = "/band", method = RequestMethod.PUT)
	public Band updateBand(@RequestBody Band band) {
		return bandService.update(band);
	}

	@RequestMapping(value = "/band/{id}", method = RequestMethod.GET)
	public Band getBand(@PathVariable("id") Long id) {
		return bandService.findById(id);
	}

	@RequestMapping(value = "/band", method = RequestMethod.DELETE)
	public void deleteBand() {
		bandService.delete(1L);
	}

}
