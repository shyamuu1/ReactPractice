package com.goodburger.demo.models;


import java.math.BigDecimal;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Orders")
public class Order {
	@Id
	private ObjectId _id;
	private List<Food> allOrders;
	private String totalPrice;
	
	public Order() {}
	
	public Order(ObjectId _id, List<Food> allOrders, String totalPrice) {
		this._id =_id;
		this.allOrders = allOrders;
		this.totalPrice = totalPrice;
	}
	
	public String getId() {
		return this._id.toHexString();
	}
	
	public void setId(ObjectId id) {
		this._id = id;
	}
	
	public List<Food> getOrders(){
		return this.allOrders;
	}
	
	public void setOrders(List<Food> orderList) {
		this.allOrders = orderList;
	}
	
	public BigDecimal getTotalPrice() {
		return new BigDecimal(this.totalPrice);
	}
	
	public void setTotalPrice(String total) {
		this.totalPrice = total;
	}

	@Override
	public String toString() {
		return "Order [_id=" + _id + ", allOrders=" + allOrders + ", totalPrice=" + totalPrice + "]";
	}
	
	

}
