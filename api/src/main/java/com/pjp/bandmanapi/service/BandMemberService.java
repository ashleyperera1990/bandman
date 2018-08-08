package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.BandMember;

import java.util.List;

public interface BandMemberService extends BaseService<BandMember> {

	List<BandMember> findByBandId(Long bandId);
}
