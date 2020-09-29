package com.springmongoparactice.mongopractice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Items {
	@Id
	private String id;
	private String value;
	
	public Items(String id, String value) {
		this.id = id;
		this.value = value;
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
	
	public String getValue() {
		return this.value;
	}
	
	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", value=" + value + "]";
	}
	
	
}
