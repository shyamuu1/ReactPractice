package com.goodburger.demo.requests;

public class LoginCustomerRequest {
	private String email;
	private String password;
	
	public LoginCustomerRequest(String email, String password) {
		this.email = email;
		this.password = password;
	}
	
	public String getEmail() {
		return this.email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return this.password;
	}
	
	public void setPassword(String password) {
		this.password = password;
		
	}
	

}
