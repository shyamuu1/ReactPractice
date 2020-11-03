package com.goodburger.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodburger.demo.models.CardPayment;
import com.goodburger.demo.models.Customer;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	private CustomerRepository customerRepo;
	
	@Autowired
	public CustomerService(CustomerRepository customerRepo) {
		this.customerRepo = customerRepo;
	}
	
	public Customer getCustomerByEmail(String email) {
		return this.customerRepo.findBy_email(email);
	}
	
	public Customer register(String email, String password) {
		Customer c = new Customer();
		Boolean validUser = this.validateUserIsUnique(email);
		if(validUser) {
			c.setEmail(email);
			c.setPassword(password);
			c.setCcInfo(new CardPayment());
			c.setMyOrders(new ArrayList<Order>());
			c.setIsValid(true);
			this.customerRepo.save(c);
			return c;
		}
		c.setIsValid(false);
		return c;
		
	}
	
	public Boolean validateUserIsUnique(String email) {
		Customer c = this.getCustomerByEmail(email);
		return (c != null)? false:true;
		
	}
	

}
