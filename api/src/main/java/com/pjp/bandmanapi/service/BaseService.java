package com.pjp.bandmanapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BaseService<T>  {

	T create(T entity);

	T update(T entity);

	List<T> findAll();

	T findById(Long id);

	void delete(Long id);
}
