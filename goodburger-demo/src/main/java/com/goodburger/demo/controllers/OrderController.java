package com.goodburger.demo.controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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
	@GetMapping("/orderId")
	public String getOrderId() {
		return ObjectId.get().toHexString();
	}
	
	@PostMapping("/")
	public Order addOrders(@RequestBody Food[] orders) {
		return this.os.createOrder(orders);
	}
	
	@RequestMapping(value="/addFood/{orderId}", method=RequestMethod.POST)
	public ResponseEntity<String> addFoodtoOrder(@RequestBody Food food, @PathVariable ObjectId orderId){
		ResponseEntity<String> resp = null;
		try {
			String order_id =this.os.addFoodToOrder(food, orderId);
			if(order_id != null) {
				resp = new ResponseEntity<String>(order_id, HttpStatus.OK);
			}else {
				resp = new ResponseEntity<String>("Food object was not added to the Order", HttpStatus.BAD_REQUEST);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	@RequestMapping(value="/{foodId}",  method=RequestMethod.POST)
	public ResponseEntity<Order> deleteFood(@RequestBody Order order, @PathVariable ObjectId foodId) {
		ResponseEntity<Order> OrderResp  = null;
		try {
			Order updatedorder = this.os.deleteFoodInOrder(order, foodId);
			OrderResp = new ResponseEntity<Order>(updatedorder, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return OrderResp;
		
	}

}
