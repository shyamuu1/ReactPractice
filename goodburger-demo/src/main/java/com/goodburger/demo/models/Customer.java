package com.goodburger.demo.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Customers")
public class Customer {
	@Id
	private ObjectId customerId;
	private String email;
	private String password;
	private Order myOrder;
	private CardPayment ccInfo;
	private Boolean isValid;
	
	
	public Customer() {
		setId(ObjectId.get());
		setEmail("");
		setPassword("");
		setMyOrder(new Order());
		setCcInfo(new CardPayment());
		setIsValid(true);
	}

	public Customer(ObjectId customerId, String email, String password, Order myOrders, CardPayment ccInfo, Boolean isValid) {
		this.customerId = customerId;
		this.email = email;
		this.password = password;
		this.myOrder = myOrders;
		this.ccInfo = ccInfo;
		this.isValid = isValid;
	}
	
	// Getters and Setters
	
	public String getId() {
		return this.customerId.toHexString();
	}
	
	public void setId(ObjectId id) {
		this.customerId = id;
	}
	
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

	public Order getMyOrder() {
		return this.myOrder;
	}

	public void setMyOrder(Order myOrders) {
		this.myOrder = myOrders;
	}

	public CardPayment getCcInfo() {
		return ccInfo;
	}

	public void setCcInfo(CardPayment ccInfo) {
		this.ccInfo = ccInfo;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", email=" + email + ", password=" + password + ", myOrder="
				+ myOrder + ", ccInfo=" + ccInfo + ", isValid=" + isValid + "]";
	}

	
	
	
	
	
	
}
