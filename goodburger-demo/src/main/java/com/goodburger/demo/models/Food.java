package com.goodburger.demo.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Food {
	@Id
	private ObjectId _id;
	private String name;
	private String food_type;
	private String description;
	private Double price;
	
	public Food() {}
	
	public Food(ObjectId _id, String name, String food_type, String description, Double price) {
		this._id = _id;
		this.name = name;
		this.food_type = food_type;
		this.description = description;
		this.price = price;
		
	}
	
	//getters and setters
	public ObjectId getId() {
		return this._id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getFoodType() {
		return this.food_type;
	}
	
	public String getDecription() {
		return this.description;
	}
	
	public Double getPrice() {
		return this.price;
	}
	
	public void setId(ObjectId id) {
		this._id =id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setFoodType(String foodType) {
		this.food_type = foodType;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setPrice(Double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Food [_id=" + _id + ", name=" + name + ", food_type=" + food_type + ", description=" + description
				+ ", price=" + price + "]";
	}

	
	
	

}
