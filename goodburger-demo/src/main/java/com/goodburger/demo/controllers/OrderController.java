package com.goodburger.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@PostMapping("/")
	public String addOrders(@RequestBody String[] orders) {
		System.out.println("IN ADD ORDERS "+orders);
		return this.os.createOrder(orders);
	}

}
