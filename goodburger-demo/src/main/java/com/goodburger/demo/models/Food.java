package com.goodburger.demo.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Food")
public class Food {
	@Id
	private ObjectId _id;
	private String name;
	private String foodType;
	private String description;
	private String price;
	
	public Food() {}
	
	public Food(ObjectId _id, String name, String foodType, String description, String price) {
		this._id = _id;
		this.name = name;
		this.foodType = foodType;
		this.description = description;
		this.price = price;
		
	}
	
	//getters and setters
	public String getId() {
		return this._id.toHexString();
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getFoodType() {
		return this.foodType;
	}
	
	public String getDecription() {
		return this.description;
	}
	
	public String getPrice() {
		return this.price;
	}
	
	public void setId(ObjectId id) {
		this._id =id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setPrice(String price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Food [_id=" + _id + ", name=" + name + ", foodType=" + foodType + ", description=" + description
				+ ", price=" + price + "]";
	}

	
	
	

}
