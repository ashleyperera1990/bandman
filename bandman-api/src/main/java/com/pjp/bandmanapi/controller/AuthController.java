package com.pjp.bandmanapi.controller;

import com.pjp.bandmanapi.model.LoginUser;
import com.pjp.bandmanapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "/login")
	public LoginUser login(@RequestBody LoginUser user) {
		return loginService.findByEmail("ninedartfinish@gmail.com");
	}


}
