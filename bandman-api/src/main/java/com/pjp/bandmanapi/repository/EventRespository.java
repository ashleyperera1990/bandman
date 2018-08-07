package com.pjp.bandmanapi.repository;

import com.pjp.bandmanapi.model.Event;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EventRespository extends CrudRepository<Event, Long> {

	List<Event> findByBand_Id(Long bandId);
}
