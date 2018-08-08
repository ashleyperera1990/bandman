package com.pjp.bandmanapi.repository;

import com.pjp.bandmanapi.model.LoginUser;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<LoginUser, Long> {

	LoginUser findByEmailAddress(String emailAddress);

}
