package com.docdok.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.docdok.crud.entity.User;
import com.docdok.crud.service.UserService;
@CrossOrigin(maxAge = 3600)


@RestController
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.createUser(user);
	}

	@GetMapping("/user/{id}")
		public User getUserById(@PathVariable int id) {
		return userService.getUserById(id);
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userService.getUsers();
	}
}
