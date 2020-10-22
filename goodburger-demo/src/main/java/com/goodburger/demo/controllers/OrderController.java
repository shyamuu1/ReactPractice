package com.goodburger.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PostMapping("/")
	public String addOrders(List<Food> orders) {
		return this.os.createOrder(orders);
	}

}
