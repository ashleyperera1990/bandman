package com.pjp.bandmanapi.repository;

import com.pjp.bandmanapi.model.Band;
import org.springframework.data.repository.CrudRepository;

public interface BandRepository extends CrudRepository<Band, Long> {
}
