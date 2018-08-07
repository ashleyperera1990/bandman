package com.pjp.bandmanapi.service;

import com.pjp.bandmanapi.model.LoginUser;

public interface LoginService extends BaseService<LoginUser> {

	LoginUser findByEmail(String email);
}
