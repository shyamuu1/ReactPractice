package com.goodburger.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbuger.demo.responses.CustomerResponse;
import com.goodburger.demo.models.CardPayment;
import com.goodburger.demo.models.Customer;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	private Customer c;
	private CustomerResponse response;
	private CustomerRepository customerRepo;
	
	@Autowired
	public CustomerService(CustomerRepository customerRepo) {
		this.customerRepo = customerRepo;
	}
	
	public CustomerResponse getGuest() {
		response = new CustomerResponse();
		c = this.getDefaultCustomer();
		response.setCustomerId(c.getId());
		response.setMyOrder(c.getMyOrder());
		return response;	
	}
	
	public Customer getDefaultCustomer() {
		return new Customer();
	}
	
	public Customer getCustomerByEmail(String email) {
		return this.customerRepo.findByemail(email);
	}
	
	public Customer register(String email, String password) {
		Boolean validUser = this.validateUserIsUnique(email);
		c = new Customer();
		if(validUser) {
			c.setEmail(email);
			c.setPassword(password);
			c.setCcInfo(new CardPayment());
			c.setMyOrder(new Order());
			c.setIsValid(true);
			this.customerRepo.save(c);
			return c;
		}
		c.setIsValid(false);
		return c;
		
	}
	
	public Boolean validateUserIsUnique(String email) {
		c = this.getCustomerByEmail(email);
		return (c != null)? false:true;	
	}
	

}
