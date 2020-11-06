package com.goodburger.demo.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class Address {
	
	private String fullname;
	private String streetline1;
	private String city;
	private String state;
	private String zipcode;
	private String country;
	
	public Address() {
		this.fullname = "";
		this.streetline1 = "";
		this.city = "";
		this.state = "";
		this.zipcode = "";
		this.country = "";
	}

	public Address(String fullname, String streetname,String city, String state, String zipcode, String country) {
		this.fullname = fullname;
		this.streetline1 = streetname;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.country = country;
	}
	
	

	@Override
	public String toString() {
		return "Address [fullname=" + fullname + ", streetname=" + streetline1 + ", city=" + city + ", state=" + state + ", zipcode=" + zipcode + ", country=" + country + "]";
	}
	
	
}
