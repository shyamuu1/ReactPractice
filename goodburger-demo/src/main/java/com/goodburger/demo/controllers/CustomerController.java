package com.goodburger.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.goodbuger.demo.responses.CustomerResponse;
import com.goodburger.demo.models.Customer;
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
	
	@GetMapping("/")
	public CustomerResponse getCustomer() {
		return this.cs.getGuest();
	}
	
	@RequestMapping(value="/default", method=RequestMethod.GET)
	public Customer getDefaultCustomer(){
		return this.cs.getDefaultCustomer();	
	}
	
	@RequestMapping(value="/{email}", method=RequestMethod.GET)
	public Customer getCustomerByEmail(@PathVariable String email) {
		return this.cs.getCustomerByEmail(email);
	}
	
	@RequestMapping(value="/", method=RequestMethod.POST)
	public Customer registerCustomer(@RequestBody Customer newUser) {
		String email = newUser.getEmail();
		String password = newUser.getPassword();
		return this.cs.register(email, password);
	}
	
	

}
