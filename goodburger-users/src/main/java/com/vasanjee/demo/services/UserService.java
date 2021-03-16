package com.vasanjee.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.vasanjee.demo.datamapper.UserDataMapper;
import com.vasanjee.demo.models.User;

@Service
public class UserService {
	
	private final JdbcTemplate pg;
	
	public UserService(@Qualifier("postgresTemplate") JdbcTemplate pg) {
		this.pg = pg;
	}
	
	public List<User> getUsers(){
		String sql ="SELECT * FROM users";
		List<User> allUsers = pg.query(sql, new UserDataMapper());
		return allUsers;
	}
	
	

}
