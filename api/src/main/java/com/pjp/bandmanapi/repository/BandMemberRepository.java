package com.pjp.bandmanapi.repository;

import com.pjp.bandmanapi.model.BandMember;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BandMemberRepository extends CrudRepository<BandMember, Long> {

	List<BandMember> findByBand_Id(Long id);
}
