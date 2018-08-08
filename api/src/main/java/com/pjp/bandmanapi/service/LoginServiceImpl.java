package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.LoginUser;
import com.pjp.bandmanapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public LoginUser create(LoginUser entity) {
		return userRepository.save(entity);
	}

	@Override
	public LoginUser update(LoginUser entity) {
		return userRepository.save(entity);
	}

	@Override
	public List<LoginUser> findAll() {
		return null;
	}

	@Override
	public LoginUser findById(Long id) {
		return userRepository.findById(id).get();
	}

	@Override
	public void delete(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public LoginUser findByEmail(String email) {
		return userRepository.findByEmailAddress(email);
	}
}
