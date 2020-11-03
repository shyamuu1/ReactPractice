package com.goodburger.demo.models;

public class Address {
	
	private String fullname;
	private String streetname;
	private String buildingname;
	private String city;
	private String state;
	private String zipcode;
	private String country;
	
	public Address() {
		this.fullname = "";
		this.streetname = "";
		this.buildingname = "";
		this.city = "";
		this.state = "";
		this.zipcode = "";
		this.country = "";
	}

	public Address(String fullname, String streetname, String buildingname, String city, String state, String zipcode,
			String country) {
		this.fullname = fullname;
		this.streetname = streetname;
		this.buildingname = buildingname;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.country = country;
	}

	@Override
	public String toString() {
		return "Address [fullname=" + fullname + ", streetname=" + streetname + ", buildingname=" + buildingname
				+ ", city=" + city + ", state=" + state + ", zipcode=" + zipcode + ", country=" + country + "]";
	}
	
	
}
