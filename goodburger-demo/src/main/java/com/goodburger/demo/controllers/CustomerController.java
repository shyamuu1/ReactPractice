package com.goodburger.demo.controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.goodbuger.demo.responses.CustomerResponse;
import com.goodburger.demo.models.Customer;
import com.goodburger.demo.models.Food;
import com.goodburger.demo.services.CustomerService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/customers")
public class CustomerController {
	
	private CustomerService cs;
	
	@Autowired
	public CustomerController(CustomerService cs) {
		this.cs =  cs;
	}
	//returns default CustomerResponse or the first one inside the table
	@GetMapping("/")
	public CustomerResponse getCustomer() {
		return this.cs.getGuest();
	}
	//need to edit
	@RequestMapping(value="/", method=RequestMethod.POST)
	public Customer registerCustomer(@RequestBody Customer newUser) {
		String email = newUser.getEmail();
		String password = newUser.getPassword();
		return this.cs.register(email, password);
	}
	
	//update Order for Customer by adding a new menu Item
	@RequestMapping(value="/addFood/{customerId}", method=RequestMethod.POST)
	public ResponseEntity<String> addMenuItemUpdate(@RequestBody Food f, @PathVariable ObjectId customerId){
		ResponseEntity<String> resp = null;
		try {
			this.cs.addMenutItemToOrder(f, customerId);
			resp = new ResponseEntity<String>("Order Successfully added", HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	//Delete menuItem from Customer's Order
	@RequestMapping(value="/{menuItemId}", method=RequestMethod.POST)
	public List<Food> deleteMenuItemUpdate(@RequestBody ObjectId customerId, @PathVariable ObjectId menuItemId){
		return this.cs.deleteMenuItemFromOrder(customerId, menuItemId);
	}
	
	

}
