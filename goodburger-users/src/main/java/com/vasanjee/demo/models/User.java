package com.vasanjee.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="USER_ID")
	private Long Id;
	
	@Column(name="USERNAME")
	private String username;
	
	@Column(name="PASSWORD")
	private String password;
	
	private String authToken;
	
	
	public User() {
		
	}
	public User(String username, String password) {
		this.username = username;
		this.password = password;
		
	}
	
	public String getUsername() {
		return this.username;
	}
	
	public void setUsername(String email) {
		this.username = email;
	}
	
	public String getPassword() {
		return this.password;
	}
	
	public void setPassword(String pwd) {
		this.password = pwd;
	}
	
	public void setAuthToken(String token) {
		this.authToken = token;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", authToken=" + authToken + "]";
	}
	
	

}
