package com.pjp.bandmanapi.repository;

import com.pjp.bandmanapi.model.Feed;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FeedRepository extends CrudRepository<Feed, Long> {

	List<Feed> findByBand_Id(Long id);
}
