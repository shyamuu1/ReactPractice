package com.goodburger.demo.controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.services.OrderService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/orders")
public class OrderController {
	
	private OrderService os;
	
	@Autowired
	public OrderController(OrderService os) {
		this.os = os;
	}
	
	@GetMapping("/")
	public List<Order> getOrders(){
		return this.os.getAllOrders();
	}
	
	@PostMapping("/")
	public Order addOrders(@RequestBody Food[] orders) {
		return this.os.createOrder(orders);
	}
	
	@RequestMapping(value="/addFood/{orderId}", method=RequestMethod.POST)
	public ResponseEntity<String> updateOrder(@RequestBody Food food, @PathVariable ObjectId orderId){
		ResponseEntity<String> resp = null;
		try {
			this.os.addFoodToOrder(food, orderId);
			resp = new ResponseEntity<String>("Sucessfully updated list of orders", HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	@RequestMapping(value="/{foodId}",  method=RequestMethod.POST)
	public List<Food> deleteFood(@RequestBody Order order, @PathVariable ObjectId foodId) {
		return this.os.deleteFoodInOrder(order, foodId);
		
	}

}
