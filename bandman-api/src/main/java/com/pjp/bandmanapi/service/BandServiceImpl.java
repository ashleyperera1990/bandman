package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.Band;
import com.pjp.bandmanapi.repository.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BandServiceImpl implements BandService {

	@Autowired
	private BandRepository bandRepository;

	@Override
	public Band create(Band entity) {
		return bandRepository.save(entity);
	}

	@Override
	public Band update(Band entity) {
		return bandRepository.save(entity);
	}

	@Override
	public List<Band> findAll() {
		return (List<Band>) bandRepository.findAll();
	}

	@Override
	public Band findById(Long id) {
		return bandRepository.findById(id).get();
	}

	@Override
	public void delete(Long id) {
		Band band = findById(id);
		bandRepository.delete(band);
	}
}
