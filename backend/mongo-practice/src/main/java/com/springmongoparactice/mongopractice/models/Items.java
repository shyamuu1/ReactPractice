package com.springmongoparactice.mongopractice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Items {
	@Id
	private String id;
	private String description;
	
	public Items(String id, String description) {
		this.id = id;
		this.description = description;
	}
	
	//No Args Constructor
	public Items() {}
	
	//getters and setters
	public String getId() {
		return this.id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getdescription() {
		return this.description;
	}
	
	public void setdescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + "]";
	}
	
	
}
