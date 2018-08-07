package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Feed;
import com.pjp.bandmanapi.repository.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedRepository feedRepository;


	@Override
	public Feed create(Feed entity) {
		return feedRepository.save(entity);
	}

	@Override
	public Feed update(Feed entity) {
		return feedRepository.save(entity);
	}

	@Override
	public List<Feed> findAll() {
		return (List<Feed>) feedRepository.findAll();
	}

	@Override
	public Feed findById(Long id) {
		return feedRepository.findById(id).get();
	}

	public List<Feed> findByBandId(Long bandId) {
		return feedRepository.findByBand_Id(bandId);
	}

	@Override
	public void delete(Long id) {
		feedRepository.deleteById(id);
	}
}
