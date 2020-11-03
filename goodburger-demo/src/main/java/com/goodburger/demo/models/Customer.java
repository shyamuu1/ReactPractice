package com.goodburger.demo.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Customers")
public class Customer {
	@Id
	private String email;
	private String password;
	private List<Order> myOrders;
	private CardPayment ccInfo;
	private Boolean isValid;
	
	public Customer() {}

	public Customer(String email, String password, List<Order> myOrders, CardPayment ccInfo, Boolean isValid) {
		this.email = email;
		this.password = password;
		this.myOrders = myOrders;
		this.ccInfo = ccInfo;
		this.isValid = isValid;
	}
	
	// Getters and Setters
	public Boolean getIsValid() {
		return this.isValid;
	}
	
	public void setIsValid(Boolean isValid) {
		this.isValid = isValid;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Order> getMyOrders() {
		return myOrders;
	}

	public void setMyOrders(List<Order> myOrders) {
		this.myOrders = myOrders;
	}

	public CardPayment getCcInfo() {
		return ccInfo;
	}

	public void setCcInfo(CardPayment ccInfo) {
		this.ccInfo = ccInfo;
	}

	@Override
	public String toString() {
		return "Customer [email=" + email + ", password=" + password + ", myOrders=" + myOrders + ", ccInfo=" + ccInfo
				+ "]";
	}
	
	
	
	
}
