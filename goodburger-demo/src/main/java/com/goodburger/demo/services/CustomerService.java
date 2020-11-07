package com.goodburger.demo.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbuger.demo.responses.CustomerResponse;
import com.goodburger.demo.models.CardPayment;
import com.goodburger.demo.models.Customer;
import com.goodburger.demo.models.Food;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	private Customer c;
	private CustomerResponse response;
	private CustomerRepository customerRepo;
	private OrderService os;
	
	@Autowired
	public CustomerService(CustomerRepository customerRepo, OrderService os) {
		this.customerRepo = customerRepo;
		this.os = os;
	}
	// returns default state for customer response
	public CustomerResponse getGuest() {
		response = new CustomerResponse();
		c = this.getDefaultCustomer();
		this.customerRepo.save(c);
		response.setCustomerId(c.getId());
		response.setMyOrder(c.getMyOrder());
		return response;	
	}
	
	public Customer getDefaultCustomer() {
		List<Customer> allCustomers = this.customerRepo.findAll();
		if(allCustomers.isEmpty()) {
			c= new Customer();
		}else {
			c = allCustomers.get(0);
		}
		return c;
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
	
	public void addMenutItemToOrder(Food selectedMenuItem, ObjectId customerId) {
		c = this.customerRepo.findBycustomerId(customerId);
		if(c == null) {
			c = this.getDefaultCustomer();
		}
		Order current = c.getMyOrder();
		this.os.addFoodToOrder(selectedMenuItem, current);
		c.setMyOrder(current);
		this.customerRepo.save(c);
	}
	
	public List<Food> deleteMenuItemFromOrder(ObjectId customerId, ObjectId menuItemId ){
		c = this.customerRepo.findBycustomerId(customerId);
		Order o = c.getMyOrder();
		List<Food> currentOrder = this.os.deleteFoodInOrder(o, menuItemId);
		c.setMyOrder(o);
		this.customerRepo.save(c);
		return currentOrder;
	}
	
	public Boolean validateUserIsUnique(String email) {
		c = this.getCustomerByEmail(email);
		return (c != null)? false:true;	
	}

}
