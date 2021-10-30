package com.docdok.crud.service;

import java.util.List;

import com.docdok.crud.dao.UserRepository;
import com.docdok.crud.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public User getUserById(int id) {
		return userRepository.findById(id).orElse(null);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

}
