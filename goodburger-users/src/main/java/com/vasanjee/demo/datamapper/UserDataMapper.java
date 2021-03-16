package com.vasanjee.demo.datamapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.vasanjee.demo.models.User;

public class UserDataMapper implements RowMapper<User> {
	
	public UserDataMapper( ) {};

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User u = new User();
		u.setUsername(rs.getString("username"));
		u.setPassword(rs.getString("password"));
		u.setAuthToken("Cgjtukdbhh623mm$");
		return u;
	}
	
	

}
