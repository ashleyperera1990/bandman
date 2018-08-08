package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Band;
import com.pjp.bandmanapi.model.BandMember;
import com.pjp.bandmanapi.model.Feed;
import com.pjp.bandmanapi.repository.BandMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BandMemberServiceImpl implements BandMemberService {

	@Autowired
	private BandMemberRepository bandMemberRepository;

	@Override
	public BandMember create(BandMember entity) {
		return bandMemberRepository.save(entity);
	}

	@Override
	public BandMember update(BandMember entity) {
		return bandMemberRepository.save(entity);
	}

	@Override
	public List<BandMember> findAll() {
		return (List<BandMember>) bandMemberRepository.findAll();
	}

	@Override
	public BandMember findById(Long id) {
		return bandMemberRepository.findById(id).get();
	}

	@Override
	public void delete(Long id) {
		BandMember member = findById(id);
		bandMemberRepository.delete(member);
	}

	@Override
	public List<BandMember> findByBandId(Long bandId) {
		return bandMemberRepository.findByBand_Id(bandId);
	}
}
