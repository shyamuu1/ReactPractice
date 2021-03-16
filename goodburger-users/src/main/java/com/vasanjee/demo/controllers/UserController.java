package com.vasanjee.demo.controllers;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vasanjee.demo.models.User;
import com.vasanjee.demo.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	private UserService us;
	
	public UserController(UserService us) {
		this.us = us;
	}
	
	@GetMapping(produces= {MediaType.APPLICATION_JSON_VALUE})
	public List<User> getallUsers(){
		return us.getUsers();
	}

}
