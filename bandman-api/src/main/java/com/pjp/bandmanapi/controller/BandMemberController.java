package com.pjp.bandmanapi.controller;


import com.pjp.bandmanapi.model.BandMember;
import com.pjp.bandmanapi.service.BandMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BandMemberController {

	@Autowired
	private BandMemberService bandMemberService;

	@RequestMapping(value = "/bandMembers", method = RequestMethod.GET)
	public List<BandMember> getAllBandMembers() {
		return bandMemberService.findAll();
	}

	@RequestMapping(value = "/bandMembers/{id}", method = RequestMethod.GET)
	public BandMember getBandMemberById(@PathVariable("id") Long id) {
		return bandMemberService.findById(id);
	}

	@RequestMapping(value = "/bandMembers", method = RequestMethod.POST)
	public BandMember createBandMember(@RequestBody BandMember bandMember) {
		return bandMemberService.create(bandMember);
	}

	@RequestMapping(value = "/bandMembers", method = RequestMethod.PUT)
	public BandMember getAllBandMembers(@RequestBody BandMember bandMember) {
		return bandMemberService.update(bandMember);
	}

	@RequestMapping(value = "/bandMembers/{id}", method = RequestMethod.DELETE)
	public void deleteBandMember(@PathVariable("id") Long id) {
		bandMemberService.delete(id);
	}
}
