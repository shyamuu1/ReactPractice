package com.goodbuger.demo.responses;

import org.bson.types.ObjectId;

import com.goodburger.demo.models.Order;

public class CustomerResponse {
	private String customerId;
	private Order myOrder;
	
	
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Order getMyOrder() {
		return myOrder;
	}
	public void setMyOrder(Order myOrder) {
		this.myOrder = myOrder;
	}
	
	

}
